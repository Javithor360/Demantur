const { v2: cloudinary } = require('cloudinary');

cloudinary.config({
  cloud_name: 'demantur',
  api_key: '457651968552444',
  api_secret: 'CXFvSWNcuDwFak87vZpokSTT-XU',
})

exports.uploadRegisterImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'Demantur-Register'
  })
}