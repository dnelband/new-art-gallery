import { NextApiRequest, NextApiResponse } from 'next';
import { importDb } from '../../../config/db';

export default async function getSubGalleryById(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const db = await importDb();

  if (req.method === 'PUT') {
    await db.run(
      `update subgallery set title = ?, price = ?, picture = ?, size = ?, type_of = ? where id = ?`,
      req.body.title,
      req.body.price,
      req.body.picture,
      req.body.size,
      req.body.type_of,
      req.query.id
    );
  }

  if (req.method === 'DELETE') {
    await db.run('delete from subgallery where id = ?', req.query.id);
  }

  let subgallery = await db.all('select * from subgallery where id = ?', [
    req.query.id,
  ]);
  res.json(subgallery);
}
