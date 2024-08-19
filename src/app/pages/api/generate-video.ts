// src/pages/api/generate-video.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { renderVideo } from 'revideo';
import videoTemplate from '../../templates/videoTemplate';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { text } = req.query;

  if (typeof text !== 'string') {
    res.status(400).json({ error: 'Invalid text parameter' });
    return;
  }

  try {
    const videoBuffer = await renderVideo(videoTemplate, { text });
    res.setHeader('Content-Type', 'video/mp4');
    res.send(videoBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate video' });
  }
}
