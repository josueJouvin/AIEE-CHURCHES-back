export default ({env}) => ({
    // ... other props
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
                
            },
            actionOptions: {
                upload: {
                    
                },
                uploadStream: {
                    format: 'WebP',
                    folder: env("CLOUDINARY_FOLDER")
                },
                delete: {},
            },
        },
    },
});
