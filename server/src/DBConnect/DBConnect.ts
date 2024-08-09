import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // .env 파일에서 환경 변수 로드

const DBConnect = async () => {
  try {
    const connnect = await mongoose.connect(process.env.DB_CONNECT || "");
    console.log("MongoDB Connect Success");
  } catch (err) {
    console.log(err);
  }
};
export default DBConnect;
