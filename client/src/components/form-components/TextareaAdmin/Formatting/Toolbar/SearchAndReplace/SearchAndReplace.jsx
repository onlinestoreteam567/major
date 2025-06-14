import { useState } from 'react';

const SearchAndReplace = ({ editor }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [replaceTerm, setReplaceTerm] = useState('');

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
    <div>
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
export default SearchAndReplace;
