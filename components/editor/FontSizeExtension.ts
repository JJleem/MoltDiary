/* eslint-disable @typescript-eslint/no-explicit-any */
import { Extension } from "@tiptap/core";
import { CommandProps } from "@tiptap/core";
const FontSizeExtension = Extension.create({
  name: "fontSize",

  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => element.style.fontSize || null,
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }
              return { style: `font-size: ${attributes.fontSize}` };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontSize:
        (size: string) =>
        ({ chain }: CommandProps) => {
          return chain().setMark("textStyle", { fontSize: size }).run();
        },
    } as any;
  },
});

export default FontSizeExtension;
