import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors";
import { serviceAccountKey } from "./firebaseServiceAccountKey.js";
import admin from "firebase-admin"
import userRouter from "./routes/userAuth.js";

admin.initializeApp({
    credential:admin.credential.cert(serviceAccountKey)
});
export default admin;

// Initialize the app
export const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.get("/",(req,res)=>{
    res.send("Express Working");
})
app.use("/connectTopApi/users/auth",userRouter);

app.listen(8000, (req,res)=>{
    console.log("Server Initialized at 8000");
})