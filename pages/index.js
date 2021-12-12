import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <script
          src='https://kit.fontawesome.com/4eddce3a99.js'
          crossorigin='anonymous'
        ></script>
      </Head>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
        integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      />
      <Header />
      <Gallery />

      <div className={styles.container}>
        <div>
          <div className={styles.preview}>
            <img src='/uploads/t3.jpg' className={styles.firstImg} />
            <div className={styles.caption}>
              <h2>
                Se alla <br />
                <span> tavlor</span>
              </h2>
              <p>⟶</p> <a href='#'></a>
            </div>
          </div>
        </div>
        <div className={styles.preview}>
          <img src='/uploads/s9.jpg' className={styles.secondImg} />
          <div className={styles.caption}>
            <h2>
              Se alla
              <br />
              <span> skulpturer</span>
            </h2>
            <p>⟶</p>
          </div>
        </div>
      </div>

      <About />
    </div>
  );
}
