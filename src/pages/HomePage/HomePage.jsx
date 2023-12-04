import { Helmet } from 'react-helmet';

import styles from './HeroPage.module.scss';
import { Container } from 'components';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>2m Studio Pracownia Projektowa</title>
      </Helmet>

      <Container type="full">
        <div className={styles['hero']}></div>
      </Container>

      <p>Home</p>
    </>
  );
};

export default Home;
