import { NextApiRequest, NextApiResponse } from 'next';
import { importDb } from '../../config/db';

export default async function getMainGallery(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const db = await importDb();
  if (req.method === 'POST') {
    await db.run(
      'INSERT INTO maingallery(picture) VALUES (?)',
      req.body.picture
    );
  }
  let maingallerys = await db.all('select * from maingallery');
  res.json(maingallerys);
}
