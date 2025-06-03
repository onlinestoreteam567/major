import YouTubeLink from './YouTubeLink';
import { useEditorCommands } from './useEditorCommands';
import cl from './index.module.scss';

const Toolbar = ({ editor, setIsShowUploadImagePopUp }) => {
  const {
    setLink,
    undo,
    redo,
    toggleBlockquote,
    setBlockquote,
    unsetBlockquote,
    handleAlignLeft,
    handleAlignCenter,
    handleAlignRight,
    handleAlignJustify,
    handleBulletList,
    handleOrderedList,
    splitListItem,
    sinkListItem,
    liftListItem,
    handleUnderline,
    handleBold,
    handleItalic,
    handleHeading1,
    handleHeading2,
    handleHeading3,
    handleHeading4,
    handleHeading5,
    handleHeading6,
  } = useEditorCommands(editor);

  return (
    <div className={cl.toolbar}>
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
  );
};
export default Toolbar;
