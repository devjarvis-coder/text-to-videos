// src/utils/fetchVideo.ts
export const fetchVideo = async (text: string) => {
    const response = await fetch(`/api/generate-video?text=${encodeURIComponent(text)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch video');
    }
    return await response.blob();
  };
  