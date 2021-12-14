import { NextApiRequest, NextApiResponse } from 'next';
import { importDb } from '../../../config/db';

export default async function getAboutById(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const db = await importDb();

  if (req.method === 'PUT') {
    await db.run(
      `update about set title = ?, about_text = ? where id = ?`,
      req.body.title,
      req.body.about_text,
      req.query.id
    );
  }

  if (req.method === 'DELETE') {
    await db.run('delete from about where id = ?', req.query.id);
  }

  let about = await db.all('select * from about where id = ?', [req.query.id]);
  res.json(about);
}
