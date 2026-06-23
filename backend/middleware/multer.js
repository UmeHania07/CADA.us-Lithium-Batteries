import multer from 'multer'

// Express ka jo apna express.json() hai, woh form-data ko parh hi nahi sakta! Use samajh hi nahi aata ke data kahan hai. form-data ko parhne ke liye hume ek teesre bande ki zaroorat hoti hai jise Multer kehte hain.
// Multer ka kaam sirf itna hai ke woh us packet ko cheer-phaar karke image nikalta hai, aur use aapke server ke local computer par thodi der ke liye (temporary) rakh deta hai (req.file ke andar).
const storage = multer.diskStorage({
  filename:function (req,file,callback){
    callback(null,file.originalname)
  }
})

const upload = multer({storage})

export default upload 