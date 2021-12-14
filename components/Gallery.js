import galleryStyles from '../styles/Gallery.module.css';
import React, { useState } from 'react';
import { getMiddlewareRegex } from 'next/dist/shared/lib/router/utils';
import CloseIcon from '@material-ui/icons/Close';

const Gallery = ({ gallery }) => {
  const [modal, setModal] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState('');

  let data = [
    {
      id: 1,
      imgSrc: '/uploads/t1.jpg',
    },
    {
      id: 2,
      imgSrc: '/uploads/s1.jpg',
    },
    {
      id: 3,
      imgSrc: '/uploads/t5.jpg',
    },
    {
      id: 4,
      imgSrc: '/uploads/s2.jpg',
    },
    {
      id: 5,
      imgSrc: '/uploads/t3.jpg',
    },

    {
      id: 7,
      imgSrc: '/uploads/t4.jpg',
    },
    {
      id: 8,
      imgSrc: '/uploads/s4.jpg',
    },
    {
      id: 9,
      imgSrc: '/uploads/t2.jpg',
    },
    {
      id: 10,
      imgSrc: '/uploads/s9.jpg',
    },
    {
      id: 11,
      imgSrc: '/uploads/t6.jpg',
    },
  ];

  function getImg(imgSrc) {
    setTempimgSrc(imgSrc);
    setModal(true);
  }
  return (
    <>
      <div className={modal ? galleryStyles.modalOpen : galleryStyles.modal}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModal(false)} />
      </div>

      <div
        className={modal ? galleryStyles.galleryBlur : galleryStyles.gallery}
      >
        {data.map((item, index) => {
          return (
            <div
              className={galleryStyles.pics}
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: '100%' }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
