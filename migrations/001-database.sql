-- Up

CREATE TABLE Maingallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    picture TEXT
);

CREATE TABLE Subgallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    price TEXT,
    picture TEXT,
    size TEXT,
    type_of TEXT
);


CREATE TABLE About (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    about_text TEXT
);

CREATE TABLE Contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullname text,
    email text,
    msg text,
    created_at DATETIME CURRENT_TIMESTAMP,
    seen boolean
);


INSERT INTO Maingallery (picture)  values ('/public/rnr-mobile.jpg');
INSERT INTO Maingallery (picture)  values ('/public/rnr-tablet.jpg');
INSERT INTO Subgallery (title,price,picture,size,type_of)  values ('a', '30', '/public/rnr-mobile.jpg', '30 x 40','betong&mosaik');
INSERT INTO Subgallery (title,price,picture,size,type_of)  values ('b', '40', '/public/rnr-mobile.jpg', '30 x 40','tavlor');
INSERT INTO About (title,about_text)  values ('My fisrt abou', 'This is a website');
INSERT INTO Contact (fullname,email,msg,seen)  values ('a message','sjbv@kjsvnh.de', 'hello there', false );
INSERT INTO Contact (fullname,email,msg,seen)  values ('message nr two', 'jsdcbh@jhbvf.com', 'hello there', true);

-- Down

DROP TABLE Maingallery;
DROP TABLE Subgallery;
DROP TABLE About;
DROP TABLE Contact;