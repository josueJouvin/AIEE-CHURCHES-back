module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Dejamos que se complete la subida

    if (ctx.request.url.includes('/upload') && ctx.method === 'POST') {
      try {
        let folderName
        // Obtenemos el último archivo subido
        const files = await strapi.query('plugin::upload.file').findMany({
          orderBy: { createdAt: 'desc' },
          limit: 1,
          populate: ['folder']  // Importante: esto nos trae la información de la carpeta
        });

        const rootFolder = process.env.CLOUDINARY_FOLDER;

          // get upload plugin configuration
          const config = strapi.config.get("plugin::upload");
          console.log(rootFolder, config)

        if (files && files.length > 0) {
          const lastFile = files[0];
          
          if (lastFile.folder) {
            console.log(lastFile.folder)
            // Si el archivo está en una carpeta
            if(lastFile.folder.name === "Iglesias"){
              folderName = "Iglesias"
              console.log('🏢 Archivo subido a la carpeta Iglesias:', lastFile.name);
              config.actionOptions.uploadStream.folder = folderName;
            }else if(lastFile.folder.name === "Pastores"){
              folderName = "Pastores"
              console.log('👥 Archivo subido a la carpeta Pastores:', lastFile.name);
              config.actionOptions.uploadStream.folder = folderName;
            }else{
              folderName = "AIEE"
              config.actionOptions.uploadStream.folder = folderName;
            }
          } 
        }
      } catch (error) {
        console.error('Error al verificar el archivo:', error);
      }
    }

    await next();

  };
};