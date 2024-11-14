// pages/api/submit.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { title, content } = req.body;

    // 데이터 처리 로직 (예: 데이터베이스에 저장)
    console.log("제목:", title);
    console.log("내용:", content);

    res.status(200).json({ message: "데이터가 성공적으로 전송되었습니다." });
  } else {
    res.status(405).json({ message: "허용되지 않는 메서드입니다." });
  }
}
