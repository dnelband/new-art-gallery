const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setup() {
  const db = await sqlite.open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });

  await db.migrate({ force: 'last' });
  const maingallery = await db.all('SELECT * FROM maingallery');
  console.log(JSON.stringify(maingallery));
  const subgallery = await db.all('SELECT * FROM subgallery');
  console.log(JSON.stringify(subgallery));
  const about = await db.all('SELECT * FROM about');
  console.log(JSON.stringify(about));
  const contact = await db.all('SELECT * FROM contact');
  console.log(JSON.stringify(contact));
}

setup();
