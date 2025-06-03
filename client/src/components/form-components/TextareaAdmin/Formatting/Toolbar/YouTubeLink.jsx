import { useState } from 'react';

const YouTubeLink = ({ editor }) => {
  const [height, setHeight] = useState(480);
  const [width, setWidth] = useState(640);

  if (!editor) {
    return null;
  }

  const addYoutubeVideo = () => {
    const url = prompt('Enter YouTube URL');

    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: Math.max(320, parseInt(width, 10)) || 640,
        height: Math.max(180, parseInt(height, 10)) || 480,
      });
    }
  };

  return (
    <div className="control-group">
      <div className="button-group">
        <input
          id="width"
          type="number"
          min="320"
          max="1024"
          placeholder="width"
          value={width}
          onChange={(event) => setWidth(event.target.value)}
        />
        <input
          id="height"
          type="number"
          min="180"
          max="720"
          placeholder="height"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
        <button type="button" id="add" onClick={addYoutubeVideo}>
          Add YouTube video
        </button>
      </div>
    </div>
  );
};

export default YouTubeLink;
