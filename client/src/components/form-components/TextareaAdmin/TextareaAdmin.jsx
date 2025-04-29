import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import { useCallback, useEffect } from 'react';
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
import YouTubeLink from './YouTubeLink';
import History from '@tiptap/extension-history';
import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';

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

  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    try {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    } catch (e) {
      alert(e.message);
    }
  }, [editor]);

  // Sync external changes (if the value changes outside the component)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '');
    }
  }, [value, editor]);

  const undo = () => editor.chain().focus().undo().run();
  const redo = () => editor.chain().focus().redo().run();
  const toggleBlockquote = () => editor.chain().focus().toggleBlockquote().run();
  const setBlockquote = () => editor.chain().focus().setBlockquote().run();
  const unsetBlockquote = () => editor.chain().focus().unsetBlockquote().run();
  const handleAlignLeft = () => editor.chain().focus().setTextAlign('left').run();
  const handleAlignCenter = () => editor.chain().focus().setTextAlign('center').run();
  const handleAlignRight = () => editor.chain().focus().setTextAlign('right').run();
  const handleAlignJustify = () => editor.chain().focus().setTextAlign('justify').run();
  const handleBulletList = () => editor.chain().focus().toggleBulletList().run();
  const handleOrderedList = () => editor.chain().focus().toggleOrderedList().run();
  const splitListItem = () => editor.chain().focus().splitListItem('listItem').run();
  const sinkListItem = () => () => editor.chain().focus().sinkListItem('listItem').run();
  const liftListItem = () => () => editor.chain().focus().liftListItem('listItem').run();
  const handleUnderline = () => editor?.chain().focus().toggleUnderline().run();
  const handleBold = () => editor.chain().focus().toggleBold().run();
  const handleItalic = () => editor.chain().focus().toggleItalic().run();
  const handleHeading1 = () => editor.chain().focus().toggleHeading({ level: 1 }).run();
  const handleHeading2 = () => editor.chain().focus().toggleHeading({ level: 2 }).run();
  const handleHeading3 = () => editor.chain().focus().toggleHeading({ level: 3 }).run();
  const handleHeading4 = () => editor.chain().focus().toggleHeading({ level: 4 }).run();
  const handleHeading5 = () => editor.chain().focus().toggleHeading({ level: 5 }).run();
  const handleHeading6 = () => editor.chain().focus().toggleHeading({ level: 6 }).run();

  return (
    <div className={cl.textAreaAdmin}>
      <label htmlFor={name}>{labelText}</label>
      <div className={cl.formatting}>
        <YouTubeLink editor={editor} />
        <button type="button" onClick={addImage}>
          Set image
        </button>
        <button type="button" onClick={undo} disabled={!editor.can().undo()}>
          Undo
        </button>
        <button type="button" onClick={redo} disabled={!editor.can().redo()}>
          Redo
        </button>
        <button type="button" onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
          Set link
        </button>
        <button type="button" onClick={toggleBlockquote}>
          Toggle blockquote
        </button>
        <button type="button" onClick={setBlockquote}>
          Set blockquote
        </button>
        <button type="button" onClick={unsetBlockquote}>
          Unset blockquote
        </button>
        <button type="button" onClick={handleAlignLeft}>
          Left
        </button>
        <button type="button" onClick={handleAlignCenter}>
          Center
        </button>
        <button type="button" onClick={handleAlignRight}>
          Right
        </button>
        <button type="button" onClick={handleAlignJustify}>
          Justify
        </button>
        <button type="button" onClick={handleOrderedList}>
          Toggle ordered list
        </button>
        <button type="button" onClick={handleBulletList}>
          Toggle bullet list
        </button>
        <button type="button" onClick={splitListItem}>
          Split list item
        </button>
        <button type="button" onClick={sinkListItem}>
          Sink list item
        </button>
        <button type="button" onClick={liftListItem}>
          Lift list item
        </button>
        <button type="button" onClick={handleItalic}>
          Italic
        </button>
        <button type="button" onClick={handleBold}>
          Bold
        </button>
        <button type="button" onClick={handleUnderline}>
          Underline
        </button>
        <button
          type="button"
          onClick={handleHeading1}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          type="button"
          onClick={handleHeading2}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
        <button
          type="button"
          onClick={handleHeading3}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          H3
        </button>
        <button
          type="button"
          onClick={handleHeading4}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
        >
          H4
        </button>
        <button
          type="button"
          onClick={handleHeading5}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
        >
          H5
        </button>
        <button
          type="button"
          onClick={handleHeading6}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
        >
          H6
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
