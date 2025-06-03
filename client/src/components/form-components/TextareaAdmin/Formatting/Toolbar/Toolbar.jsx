import YouTubeLink from './YouTubeLink';
import { useEditorCommands } from './useEditorCommands';
import cl from './index.module.scss';
import { useState } from 'react';

const Toolbar = ({ editor, setIsShowUploadImagePopUp }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [replaceTerm, setReplaceTerm] = useState('');

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

  const handleSearch = () => {
    if (!editor || !searchTerm) return;
    editor.commands.setSearchTerm(searchTerm);
  };

  const handleReplaceAll = () => {
    if (!editor || !searchTerm || !replaceTerm) return;
    editor.commands.setSearchTerm(searchTerm);
    editor.commands.setReplaceTerm(replaceTerm);
    editor.commands.replaceAll();
  };

  const handleClearSearch = () => {
    if (!editor) return;
    setSearchTerm('');
    setReplaceTerm('');
    editor.commands.setSearchTerm('');
    editor.commands.setReplaceTerm('');
    editor.commands.resetIndex();
  };

  const handleFindNext = () => {
    if (!editor) return;
    editor.commands.nextSearchResult();
  };

  const handleFindPrevious = () => {
    if (!editor) return;
    editor.commands.previousSearchResult();
  };

  const handleReplaceOne = () => {
    if (!editor || !searchTerm || !replaceTerm) return;
    editor.commands.setSearchTerm(searchTerm);
    editor.commands.setReplaceTerm(replaceTerm);
    editor.commands.replace();
  };
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
      <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <input type="text" placeholder="Replace" value={replaceTerm} onChange={(e) => setReplaceTerm(e.target.value)} />

      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <button type="button" onClick={handleFindPrevious}>
        Previous
      </button>
      <button type="button" onClick={handleFindNext}>
        Next
      </button>
      <button type="button" onClick={handleReplaceOne}>
        Replace One
      </button>
      <button type="button" onClick={handleReplaceAll}>
        Replace All
      </button>
      <button type="button" onClick={handleClearSearch}>
        Clear
      </button>
    </div>
  );
};
export default Toolbar;
