import { useState, useEffect } from 'react/cjs/react.development';
import { getServerSideProps } from '../pages/admin';
import ImageUploader from './ImageUploader';
import { server } from '../config/server';
import FormStyles from '../styles/Form.module.css';

const MainGalleryForm = (props) => {
  const maingallery = props.maingallery;
  const subgallery = props.subgallery;
  const [picture, setPicture] = useState(
    maingallery ? maingallery.picture : ''
  );
  const [title, setTitle] = useState(subgallery ? subgallery.title : '');
  const [price, setPrice] = useState(subgallery ? subgallery.price : '');
  const [subPicture, setSubPicture] = useState(
    subgallery ? subgallery.picture : ''
  );
  const [size, setSize] = useState(subgallery ? subgallery.size : '');
  const [type, setType] = useState(subgallery ? subgallery.type_of : '');
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (update === true) {
      setTimeout(() => {
        setUpdate(false);
        window.location.reload();
      }, 1000);
    }
  }, [update]);

  async function onSubmit() {
    let newPicture = {
      picture,
    };

    let url = `${server}/api/maingallerys`,
      method = 'POST';
    if (props.type === 'edit') {
      url = `${server}/api/maingallery/${maingallery.id}`;
      method = 'PUT';
    }
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPicture),
    });
    const res = await response.json();

    props.onSubmit(res);
    setUpdate(true);
  }

  async function onSubmitToSubGallery() {
    let newSubPicture = {
      title,
      price,
      picture: subPicture,
      size,
      type_of: type,
    };

    let url = `${server}/api/subgallerys`,
      method = 'POST';
    if (props.type === 'edit') {
      url = `${server}/api/subgallery/${subgallery.id}`;
      method = 'PUT';
    }
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSubPicture),
    });
    const res = await response.json();

    props.onSubmit(res);
    setUpdate(true);
  }

  return (
    <maingalleryform className={FormStyles.form}>
      <h2 className={FormStyles.h2}>Lägg till bild:</h2>
      <div className={FormStyles.container}>
        <ImageUploader
          className={FormStyles.imageUploader}
          image={picture}
          onSetImage={setPicture}
        />
        <div className={FormStyles.buttonContainer}>
          <a className={FormStyles.button} onClick={onSubmit}>
            {props.type === 'edit' ? 'Uppdatera' : 'Lägg till'}
          </a>
          {props.type === 'edit' ? (
            <a className={FormStyles.button} href='/admin'>
              Tillbaka till admin
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </maingalleryform>
  );
};

export default MainGalleryForm;
