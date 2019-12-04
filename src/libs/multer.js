const aws = require('aws-sdk')
const key = require('../../keys')
const multer = require('multer')
const multerS3 = require('multer-s3')
const uuid = require('uuid')

aws.config.update({
  secretAccessKey: key.AWS_SECRET_ACCESS,
  accessKeyId: key.AWS_ACCESS_KEY,
  region: 'us-east-2'
})
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Formato inválido,sube unicamente fotos JPEG y PNG'), false)
  }
}

const s3 = new aws.S3()
const upload = multer({
  fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: key.BUCKET_NAME,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      cb(null, uuid())
    }
  })
})

module.exports = upload
