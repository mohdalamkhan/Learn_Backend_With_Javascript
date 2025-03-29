 import multer from  "multer";

//DiskStorage we are using
 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        //no need for now
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
      cb(null,file.originalname)
    }
  })
  
  
  export const upload = multer({ storage,})  