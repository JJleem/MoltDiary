import React, { useState } from "react";

interface ColorPickerProps {
  editor: any;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ editor }) => {
  const [isColorPaletteVisible, setIsColorPaletteVisible] = useState(false);
  const [customColor, setCustomColor] = useState("#000000");

  // 색상 적용 함수
  const applyColor = (color: string) => {
    editor.chain().focus().setColor(color).run();
    setIsColorPaletteVisible(false); // 팝업 닫기
  };

  const colorPalette = [
    "#385466",
    "#efcfba",
    "#60c8b3",
    "#ce3375",
    "#000",
    "#759465",
  ];

  return (
    <div className="tooltip-container relative">
      <button
        onClick={() => setIsColorPaletteVisible(!isColorPaletteVisible)}
        className="p-2 border rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#000000"
        >
          <path d="m247-904 57-56 343 343q23 23 23 57t-23 57L457-313q-23 23-57 23t-57-23L153-503q-23-23-23-57t23-57l190-191-96-96Zm153 153L209-560h382L400-751Zm360 471q-33 0-56.5-23.5T680-360q0-21 12.5-45t27.5-45q9-12 19-25t21-25q11 12 21 25t19 25q15 21 27.5 45t12.5 45q0 33-23.5 56.5T760-280ZM80 0v-160h800V0H80Z" />
        </svg>
      </button>
      <span className="tooltip-text text-p13">글씨색상 변경</span>

      {isColorPaletteVisible && (
        <div className="absolute top-full mt-2 bg-white border p-4 rounded shadow z-50">
          {/* 색상 팔레트 */}
          <div className="flex gap-2 mb-2">
            {colorPalette.map((color) => (
              <button
                key={color}
                onClick={() => applyColor(color)}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
          {/* 사용자 정의 색상 입력 */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="border p-1 rounded w-[70%]"
              placeholder="#000000"
            />
            <button
              onClick={() => applyColor(customColor)}
              className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 text-p15 w-[30%]"
            >
              적용
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
