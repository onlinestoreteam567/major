import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import cl from './index.module.scss';
const TipTap = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Sync external changes (if the value changes outside the component)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '');
    }
  }, [value, editor]);

  const handleBold = () => {
    editor?.chain().focus().toggleBold().run();
  };

  const handleItalic = () => {
    editor?.chain().focus().toggleItalic().run();
  };

  const handleUnderline = () => {
    editor?.chain().focus().toggleUnderline().run();
  };

  return (
    <div>
      <div className={cl.formatting}>
        <button type="button" onClick={handleBold}>
          Bold
        </button>
        <button type="button" onClick={handleItalic}>
          Italic
        </button>
        <button type="button" onClick={handleUnderline}>
          Underline
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTap;
