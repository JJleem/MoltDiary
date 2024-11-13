/* "use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Node as ProseMirrorNode } from "prosemirror-model"; // ProseMirror의 Node 타입

interface ImageData {
  url: string;
  publicId: string;
}

const PostPage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [uploadedImages, setUploadedImages] = useState<ImageData[]>([]);

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "<p>Start writing your blog post...</p>",
  });

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);
      formData.append("upload_preset", uploadPreset || "");

      try {
        const response = await axios.post(cloudinaryUrl, formData);
        const imageUrl = response.data.secure_url;
        const publicId = response.data.public_id;

        setUploadedImages((prevImages) => [
          ...prevImages,
          { url: imageUrl, publicId: publicId },
        ]);

        editor?.chain().focus().setImage({ src: imageUrl }).run();
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    },
    [editor, cloudinaryUrl, uploadPreset]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // 이미지 삭제 처리
  const handleDelete = async (publicId: string, index: number) => {
    try {
      const response = await axios.post("/api/deleteImage", {
        publicId: publicId,
      });

      if (response.data.result === "ok") {
        alert("Image deleted successfully");

        setUploadedImages((prevImages) =>
          prevImages.filter((_, i) => i !== index)
        );

        // ProseMirror의 Fragment에서 노드 처리
        const imageNodes: ProseMirrorNode[] = [];
        editor?.view.state.doc.forEach((node) => {
          if (node.type.name === "image") {
            imageNodes.push(node);
          }
        });

        const imageNode = imageNodes?.[index];
        if (imageNode) {
          const fromPos = editor?.view.state.doc.resolve(0).posAtIndex(index);

          // `fromPos`가 정의된 경우에만 `deleteRange` 실행
          if (fromPos !== undefined) {
            editor?.commands.deleteRange({
              from: fromPos,
              to: fromPos + imageNode.nodeSize,
            });
          } else {
            console.warn("Position for deletion not found.");
          }
        }
      } else if (response.data.result === "not found") {
        alert("Image already deleted or not found");
      } else {
        alert("Error deleting image");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Error deleting image");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">새 글 작성하기</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        className="border border-gray-300 p-2 w-full mb-4"
      />

      <div
        {...getRootProps()}
        className="border-dashed border-2 border-gray-400 p-6 text-center mb-4"
      >
        <input {...getInputProps()} />
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
      </div>
      <div className="grid grid-flow-row  grid-cols-9  ">
        {uploadedImages.map((image, index) => (
          <div key={image.publicId} className="mb-4  w-20 relative">
             <h2 className="text-lg font-semibold">
              Uploaded Image {index + 1}:
            </h2> 
            <img
              src={image.url}
              alt={`Uploaded ${index + 1}`}
              className="mt-2 h-20 w-20"
            />
            <button
              onClick={() => handleDelete(image.publicId, index)}
              className="bg-red-500 text-white texd text-xs rounded mt-2 absolute w-4 h-4 -top-2 -right-2"
            >
              x
            </button>
          </div>
        ))}
      </div>

      <EditorContent
        editor={editor}
        className="border border-gray-300 p-4 rounded mb-4 flex justify-center items-center w-full"
      />

      <button
        onClick={() => console.log("Submit post")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Post
      </button>
    </div>
  );
};

export default PostPage; 
*/
