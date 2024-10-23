const cloudinary = require('cloudinary').v2; // Asegúrate de tener el paquete de Cloudinary instalado

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Dejamos que se complete la subida
    await next();

    if (ctx.request.url.includes('/upload') && ctx.method === 'POST') {
      try {
        // Obtenemos el último archivo subido
        const lastUploadedFile = await strapi.query('plugin::upload.file').findOne({
          orderBy: { createdAt: 'desc' },
          populate: ["folder"]
        });
        console.log(lastUploadedFile)

          
            if(lastUploadedFile.folder.name === "Iglesias"){
              console.log('🏢 Archivo subido a la carpeta Iglesias:');
              await cloudinary.uploader.upload(lastUploadedFile.url, {
                folder: "Iglesias", // Aquí defines la carpeta en Cloudinary
              });
            }else if(lastUploadedFile.folder.name === "Pastores"){
              console.log('👥 Archivo subido a la carpeta Pastores:');
              await cloudinary.uploader.upload(lastUploadedFile.url, {
                folder: "Pastores", // Aquí defines la carpeta en Cloudinary
              });
            }else{
              await cloudinary.uploader.upload(lastUploadedFile.url, {
                folder: "AIEE", // Aquí defines la carpeta en Cloudinary
              });
            }

      } catch (error) {
        console.error('Error al verificar el archivo:', error);
      }
    }


  };
};