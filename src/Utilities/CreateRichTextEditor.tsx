import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const RichTextEditor = () => {
  const [text, setText] = useState('');
    console.log("RichTextEditor", text)
  const handleChange = (value: any) => {
    setText(value);
  };

  return (
    <div>
      <ReactQuill
        value={text}
        onChange={handleChange}
        placeholder="Write something..."
      />
    </div>
  );
};

export default RichTextEditor;
