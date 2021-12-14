import { NextApiRequest, NextApiResponse } from 'next';
import { importDb } from '../../config/db';

export default async function getSubGallery(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const db = await importDb();
  if (req.method === 'POST') {
    await db.run(
      'INSERT INTO subgallery(title, price, picture, size, type_of) VALUES (?,?,?,?,?)',
      req.body.title,
      req.body.price,
      req.body.picture,
      req.body.size,
      req.body.type_of
    );
  }
  let subgallerys = await db.all('select * from subgallery');
  res.json(subgallerys);
}
