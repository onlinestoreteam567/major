import { useCallback } from 'react';

export const useEditorCommands = (editor) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
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

  // Return an object containing all the functions
  return {
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
  };
};
