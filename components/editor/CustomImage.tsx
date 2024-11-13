import { Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import React from "react";
import { NodeViewWrapper } from "@tiptap/react";

// 커스터마이즈된 이미지 컴포넌트
const CustomImageComponent: React.FC<{
  node: any;
  getPos: any;
  editor: any;
}> = ({ node, getPos, editor }) => {
  const handleClick = () => {
    // 이미지 클릭 시 포커스 설정
    if (typeof getPos === "function") {
      editor.chain().setNodeSelection(getPos()).run();
    }
  };

  // 이미지 정렬 스타일 설정
  const alignmentClass =
    node.attrs.textAlign === "center"
      ? "justify-center"
      : node.attrs.textAlign === "right"
      ? "justify-end"
      : "justify-start";

  return (
    <NodeViewWrapper
      className={`w-full flex ${alignmentClass} relative`} // 정렬 클래스 적용
      draggable="true"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={node.attrs.src}
          alt={node.attrs.alt || ""}
          className="max-h-80"
          draggable="true"
        />
        <button
          className="absolute -top-3 -right-3 bg-LegionBlue text-white rounded-full w-6 h-6 flex justify-center items-center"
          onClick={() => {
            // 이미지 삭제
            if (typeof getPos === "function") {
              editor
                .chain()
                .focus()
                .deleteRange({ from: getPos(), to: getPos() + node.nodeSize })
                .run();
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="12px"
            viewBox="0 -960 960 960"
            width="12px"
            fill="#FFFFFF"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </div>
    </NodeViewWrapper>
  );
};

// 커스터마이즈된 이미지 확장
const CustomImage = Image.extend({
  addNodeView() {
    return ReactNodeViewRenderer(CustomImageComponent);
  },
  addAttributes() {
    return {
      ...this.parent?.(),
      textAlign: {
        default: "left",
        parseHTML: (element) => element.style.textAlign || "left",
        renderHTML: (attributes) => {
          return { style: `text-align: ${attributes.textAlign}` };
        },
      },
    };
  },
});

export default CustomImage;
