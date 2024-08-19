// src/components/TextInput.tsx
import React, { useState } from 'react';

interface TextInputProps {
  onGenerate: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onGenerate }) => {
  const [text, setText] = useState('');

  const handleGenerate = () => {
    onGenerate(text);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for video"
      />
      <button onClick={handleGenerate}>Generate Video</button>
    </div>
  );
};

export default TextInput;
