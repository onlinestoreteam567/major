import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import cl from './index.module.scss';

const TipTap = ({ value, onChange, labelText, name, errors }) => {
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
      <label htmlFor={name}>{labelText}</label>
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
      {errors && errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
    </div>
  );
};

export function TextareaAdmin({ control, name, labelText, errors }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TipTap value={field.value} onChange={field.onChange} labelText={labelText} name={name} errors={errors} />
      )}
    />
  );
}
