import { NextApiRequest, NextApiResponse } from 'next';
import { importDb } from '../../../config/db';

export default async function getMainGalleryById(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const db = await importDb();

  if (req.method === 'PUT') {
    await db.run(
      `update maingallery set picture = ? where id = ?`,
      req.body.picture,
      req.query.id
    );
  }

  if (req.method === 'DELETE') {
    await db.run('delete from maingallery where id = ?', req.query.id);
  }

  let maingallery = await db.all('select * from maingallery where id = ?', [
    req.query.id,
  ]);
  res.json(maingallery);
}
