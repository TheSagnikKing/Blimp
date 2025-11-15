import { TextStyle } from "@tiptap/extension-text-style";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import style from "./TiptapEditor.module.css";
import { useState } from "react";
import {
  DownArrow,
  EditorCenterIcon,
  EditorLeftIcon,
  EditorRightIcon,
  UpArrow,
} from "../../icons";

function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.dropdown} data-label={label}>
      <button onClick={() => setOpen(!open)} className={style.dropdown_trigger}>
        {label}
        {open ? <UpArrow /> : <DownArrow />}
      </button>

      {open && <div className={style.dropdown_menu}>{children}</div>}
    </div>
  );
}

// Extensions
const extensions = [
  TextStyle,
  StarterKit,
  Underline,
  TextAlign.configure({
    types: ["heading", "paragraph"],
    alignments: ["left", "center", "right", "justify"],
  }),
];

function MenuBar({ editor }) {
  // Track editor state
  const editorState = useEditorState({
    editor,
    selector: (ctx) => ({
      isBold: ctx.editor.isActive("bold") || false,
      canBold: ctx.editor.can().chain().toggleBold().run() || false,

      isItalic: ctx.editor.isActive("italic") || false,
      canItalic: ctx.editor.can().chain().toggleItalic().run() || false,

      isStrike: ctx.editor.isActive("strike") || false,
      canStrike: ctx.editor.can().chain().toggleStrike().run() || false,

      isUnderline: ctx.editor.isActive("underline") || false,
      canUnderline: ctx.editor.can().chain().toggleUnderline().run() || false,

      isCode: ctx.editor.isActive("code") || false,
      canCode: ctx.editor.can().chain().toggleCode().run() || false,

      canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() || false,

      isParagraph: ctx.editor.isActive("paragraph") || false,
      isHeading1: ctx.editor.isActive("heading", { level: 1 }) || false,
      isHeading2: ctx.editor.isActive("heading", { level: 2 }) || false,
      isHeading3: ctx.editor.isActive("heading", { level: 3 }) || false,
      isHeading4: ctx.editor.isActive("heading", { level: 4 }) || false,
      isHeading5: ctx.editor.isActive("heading", { level: 5 }) || false,
      isHeading6: ctx.editor.isActive("heading", { level: 6 }) || false,

      textAlign:
        ctx.editor.getAttributes("paragraph").textAlign ||
        ctx.editor.getAttributes("heading").textAlign ||
        "left",

      isBulletList: ctx.editor.isActive("bulletList") || false,
      isOrderedList: ctx.editor.isActive("orderedList") || false,
      isCodeBlock: ctx.editor.isActive("codeBlock") || false,
      isBlockquote: ctx.editor.isActive("blockquote") || false,

      canUndo: ctx.editor.can().chain().undo().run() || false,
      canRedo: ctx.editor.can().chain().redo().run() || false,
    }),
  });

  return (
    <div className={style.control_group}>
      <div className={style.button_group}>
        {/* 🎨 Text Style Dropdown */}
        <Dropdown label="Text Style">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editorState.canBold}
            className={editorState.isBold ? style.is_active : ""}
          >
            Bold
          </button>

          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editorState.canItalic}
            className={editorState.isItalic ? style.is_active : ""}
          >
            Italic
          </button>

          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            disabled={!editorState.canUnderline}
            className={editorState.isUnderline ? style.is_active : ""}
          >
            Underline
          </button>

          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editorState.canStrike}
            className={editorState.isStrike ? style.is_active : ""}
          >
            Strike
          </button>
        </Dropdown>

        {/* 🏷 Headings Dropdown */}
        <Dropdown label="Headings">
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editorState.isParagraph ? style.is_active : ""}
          >
            Paragraph
          </button>
          {[1, 2, 3, 4, 5, 6].map((lvl) => (
            <button
              key={lvl}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: lvl }).run()
              }
              className={editorState[`isHeading${lvl}`] ? style.is_active : ""}
            >
              H{lvl}
            </button>
          ))}
        </Dropdown>

        {/* ↔️ Alignment Dropdown */}
        <Dropdown label="Align">
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={
              editor.isActive({ textAlign: "left" }) ? style.is_active : ""
            }
          >
            <EditorLeftIcon />
            Left
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={
              editor.isActive({ textAlign: "center" }) ? style.is_active : ""
            }
          >
            <EditorCenterIcon />
            Center
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={
              editor.isActive({ textAlign: "right" }) ? style.is_active : ""
            }
          >
            <EditorRightIcon />
            Right
          </button>
        </Dropdown>

        {/* ✔ Lists Dropdown */}
        <Dropdown label="Lists">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? style.is_active : ""}
          >
            Bullet List
          </button>

          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? style.is_active : ""}
          >
            Numbered List
          </button>
        </Dropdown>

        {/* 👉 Single Controls */}
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? style.is_active : ""}
        >
          Blockquote
        </button>

        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          Line
        </button>

        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          Redo
        </button>
      </div>
    </div>
  );
}

const TiptapEditor = ({
  selectedCampaingDescription,
  setSelectedCampaignDescription,
}) => {
  const editor = useEditor({
    extensions,
    content: selectedCampaingDescription,
    onUpdate({ editor }) {
      const html = editor.getHTML();
      setSelectedCampaignDescription(html);
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
