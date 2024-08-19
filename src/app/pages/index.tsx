// src/pages/index.tsx
import { useState } from 'react';
import TextInput from '../components/TextInput';

const Home: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleGenerateVideo = async (text: string) => {
    const response = await fetch(`/api/generate-video?text=${encodeURIComponent(text)}`);
    if (response.ok) {
      const blob = await response.blob();
      setVideoUrl(URL.createObjectURL(blob));
    } else {
      console.error('Failed to generate video');
    }
  };

  return (
    <div>
      <h1>Text to Video</h1>
      <TextInput onGenerate={handleGenerateVideo} />
      {videoUrl && <video controls src={videoUrl} />}
    </div>
  );
};

export default Home;
