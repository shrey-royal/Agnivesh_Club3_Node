const cloudinary = require("cloudinary").v2;

const uploadFile = async(file) => {
    cloudinary.config({
        cloud_name: "your_cloud_name",
        api_key: "your_api_key",
        api_secret: "your_api_secret"
    })

    const result = await cloudinary.uploader.upload(file.path);
    console.log(result);
    return result;
}

module.exports  = {
    uploadFile
}