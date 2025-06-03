import { useCallback, useState } from 'react';
import YouTubeLink from '../YouTubeLink';
import cl from './index.module.scss';
import UploadImagePopUp from './UploadImagePopUp/UploadImagePopUp';

const Formatting = ({ editor }) => {
  const [isShowUploadImagePopUp, setIsShowUploadImagePopUp] = useState(false);

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
    <>
      <div className={cl.formatting}>
        <YouTubeLink editor={editor} />
        <button type="button" onClick={() => setIsShowUploadImagePopUp(true)}>
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
      {isShowUploadImagePopUp && <UploadImagePopUp editor={editor} />}
    </>
  );
};
export default Formatting;
