import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 5000

// Database aur Cloudinary Connect Kar rahe hain
connectDB()
connectCloudinary()

// ⚠️ MIDDLEWARES (Yeh lagana sabse zaroori hai!)
app.use(express.json()) // <--- YEH LINE AAPKE JSON DATA KO READ KAREGI
app.use(cors())

// API Endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req, res) => {
    res.send("API working")
})

app.listen(port, () => console.log(`Server started on PORT: ${port}`))