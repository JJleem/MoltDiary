import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

// Cloudinary 설정
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const { publicId } = await req.json();

    if (!publicId) {
      return NextResponse.json(
        { result: "error", message: "Public ID is required" },
        { status: 400 }
      );
    }

    console.log("Deleting image with publicId:", publicId);

    const result = await cloudinary.v2.uploader.destroy(publicId);

    console.log("Deletion result:", result);

    if (result.result === "ok") {
      return NextResponse.json({ result: "ok" });
    } else {
      return NextResponse.json({
        result: "error",
        message: "Image not found or already deleted",
      });
    }
  } catch (error) {
    console.error("Error deleting image:", error);
    return NextResponse.json(
      { result: "error", message: "Error deleting image", details: error },
      { status: 500 }
    );
  }
}
