import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import cl from './index.module.scss';
import { Controller } from 'react-hook-form';
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

  const handleBold = () => editor?.chain().focus().toggleBold().run();
  const handleUnderline = () => editor?.chain().focus().toggleUnderline().run();

  return (
    <div className={cl.textAreaAdmin}>
      <div className={cl.formatting}>
        <button type="button" onClick={handleBold}>
          Bold
        </button>
        <button type="button" onClick={handleUnderline}>
          Underline
        </button>
      </div>

      <div className={cl.tipTapWrapper}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export function TextareaAdmin({ control, name }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TipTap value={field.value} onChange={field.onChange} />}
    />
  );
}
