const multer = require("multer")
const path = require("path")
const crypto = require("crypto");

module.exports = {
 dest: path.resolve(__dirname, '..','..','tmp','uploads'),
 Storage: multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '..','..','tmp','uploads'));
    },
    filename: (req, file, cb) => {
        crypto.randomBytes(5, (err, hash) =>{
            if (err) cb(err);

            const filename = `${hash.toString('hex')}-${file.originalname}`;

            cb(null, filename)
        });
    },
 }),
 limits:{
    fileSize: 2 * 1024 * 1024,
},
 fileFilter: (req, file, cb) => {
   const allowedMimes =[
    'image/jpeg',
    'image/png',
    'image/pjpeg',
   ];
   if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
   } else{
    cb(new err("tipo de arquivo invalido"));
   }
},
}