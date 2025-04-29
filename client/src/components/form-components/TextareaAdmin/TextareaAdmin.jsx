import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import cl from './index.module.scss';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Heading from '@tiptap/extension-heading';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import TextAlign from '@tiptap/extension-text-align';
import Blockquote from '@tiptap/extension-blockquote';
import Link from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';
import History from '@tiptap/extension-history';
import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';
import Formatting from './Formatting/Formatting';

const TipTap = ({ value, onChange, labelText, name, errors }) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Underline,
      Heading,
      Bold,
      Italic,
      BulletList,
      ListItem,
      OrderedList,
      Dropcursor,
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Blockquote,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
        protocols: ['http', 'https'],
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`);

            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }

            // disallowed protocols
            const disallowedProtocols = ['ftp', 'file', 'mailto'];
            const protocol = parsedUrl.protocol.replace(':', '');

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }

            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map((p) => (typeof p === 'string' ? p : p.scheme));

            if (!allowedProtocols.includes(protocol)) {
              return false;
            }

            // disallowed domains
            const disallowedDomains = ['example-phishing.com', 'malicious-site.net'];
            const domain = parsedUrl.hostname;

            if (disallowedDomains.includes(domain)) {
              return false;
            }

            // all checks have passed
            return true;
          } catch {
            return false;
          }
        },
        shouldAutoLink: (url) => {
          try {
            // construct URL
            const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`);

            // only auto-link if the domain is not in the disallowed list
            const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com'];
            const domain = parsedUrl.hostname;

            return !disallowedDomains.includes(domain);
          } catch {
            return false;
          }
        },
      }),
      Youtube.configure({
        controls: false,
        nocookie: true,
      }),
      History,
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
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
      <Formatting editor={editor} />
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
