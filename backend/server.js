// express mangoose morgan http-status dotenv express-validator

import dotenv from 'dotenv'
dotenv.config()
import app from "./app.js"
import { ConnectDB } from './config/db.config.js'
const port = process.env.PORT || 8000

// db connection
ConnectDB()

app.listen(port,()=>{
    console.log(`the server is listen at http://localhost:${port}`);
})
