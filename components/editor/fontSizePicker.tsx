/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

interface FontSizePickerProps {
  editor: any;
}

const FontSizePicker: React.FC<FontSizePickerProps> = ({ editor }) => {
  const [fontSize, setFontSize] = useState("16px");
  const [isFontSizePaletteVisible, setIsFontSizePaletteVisible] =
    useState(false);

  const fontSizeOptions = [
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
    "24px",
    "30px",
  ];

  const applyFontSize = (size: string) => {
    editor.chain().focus().setFontSize(size).run();
    setIsFontSizePaletteVisible(false); // 팝업 닫기
  };

  return (
    <div className="tooltip-container relative">
      <button
        onClick={() => setIsFontSizePaletteVisible(!isFontSizePaletteVisible)}
        className="p-2 border rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 0 24 24"
          width="20px"
          fill="#000000"
        >
          <path d="M5 4v3h5.5v12h3V7H19V4z" />
        </svg>
      </button>
      <span className="tooltip-text text-p13">글씨 크기 변경</span>

      {isFontSizePaletteVisible && (
        <div className="absolute top-full mt-2 bg-white border p-4 rounded shadow z-50">
          {/* 폰트 크기 옵션 */}
          <div className="flex flex-col gap-2 mb-2">
            {fontSizeOptions.map((size) => (
              <button
                key={size}
                onClick={() => applyFontSize(size)}
                className="p-1 border rounded text-sm"
              >
                {size}
              </button>
            ))}
          </div>
          {/* 사용자 정의 폰트 크기 입력 */}
          <div className="flex items-center gap-2 w-full ">
            <input
              type="text"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="border p-1 rounded w-[150px]"
              placeholder="16px"
            />
            <button
              onClick={() => applyFontSize(fontSize)}
              className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 w-[50px]"
            >
              적용
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FontSizePicker;
