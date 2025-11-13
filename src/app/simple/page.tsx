"use client";
import { useRef, useState } from "react";
import type { JSONContent } from "@tiptap/core";
import {
  SimpleEditor,
  type SimpleEditorHandle,
} from "@/components/tiptap-templates/simple/simple-editor";
import { Button } from "@/components/ui/button";
import { ReadOnlyFromJSON } from "@/components/ReadOnlyFromJSON";

export default function Page() {
  const editorRef = useRef<SimpleEditorHandle>(null);
  const [format, setFormat] = useState<JSONContent | null>(null);

  const handleLog = () => {
    // const html = editorRef.current?.getHTML() ?? "";
    // const text = editorRef.current?.getText() ?? "";
    const json = editorRef.current?.getJSON();

    setFormat(json ?? null);
    // console.log("HTML:", html);
    // console.log("Text:", text);
    // console.log("JSON:", json);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Thanh nút điều khiển */}
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="text-lg font-semibold">Tiptap Editor Demo</h2>
        <Button variant="outline" onClick={handleLog}>
          Cập nhật Preview
        </Button>
      </div>

      {/* Chia đôi màn hình */}
      <div className="flex flex-1 overflow-hidden">
        {/* Cột bên trái: Editor */}
        <div className="w-1/2 border-r overflow-auto p-4 bg-white">
          <SimpleEditor ref={editorRef} />
        </div>

        {/* Cột bên phải: Preview */}
        <div className="w-1/2 overflow-auto p-6 bg-gray-50">
          <h3 className="font-semibold mb-3">Nội dung hiển thị (Preview):</h3>
          <ReadOnlyFromJSON json={format} />
        </div>
      </div>
    </div>
  );
}
