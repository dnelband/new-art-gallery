import { importDb } from '../../../config/db';
import SubGalleryForm from '../../../components/SubGalleryForm';

const subGalleryView = ({ subgallery }) => {
  async function onSave(res) {
    console.log(res, 'res');
  }

  return (
    <div>
      <div>
        <SubGalleryForm
          type={'edit'}
          subgallery={subgallery}
          onSubmit={onSave}
        />
      </div>
    </div>
  );
};

export default subGalleryView;

export const getServerSideProps = async (context) => {
  const db = await importDb();
  const subgallery = await db.get('select * from subgallery where id = ?', [
    context.params.id,
  ]);
  return { props: { subgallery } };
};
