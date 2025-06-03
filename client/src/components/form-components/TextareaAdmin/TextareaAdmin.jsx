import { EditorContent, useEditor } from '@tiptap/react';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import cl from './index.module.scss';
import Formatting from './Formatting/Formatting';
import extensions from './extensions';

const TipTap = ({ value, onChange, labelText, name, errors }) => {
  const editor = useEditor({
    extensions,
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

  return (
    <div className={cl.textAreaAdmin}>
      <label htmlFor={name}>{labelText}</label>
      {editor && <Formatting editor={editor} />}
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
