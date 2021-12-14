import { NextApiRequest, NextApiResponse } from 'next';
import { importDb } from '../../config/db';

export default async function getContact(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const db = await importDb();
  if (req.method === 'POST') {
    await db.run(
      'INSERT INTO contact(fullname, email, msg, created_at, seen) VALUES (?,?,?,?,?)',
      req.body.fullname,
      req.body.email,
      req.body.msg,
      req.body.created_at,
      req.body.seen
    );
  }
  let contact = await db.all('select * from contact');
  res.json(contact);
}
