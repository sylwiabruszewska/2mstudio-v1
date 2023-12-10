import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';

import styles from './AboutUsPage.module.scss';
import { Section, Container } from 'components';
import { getAboutUsInfo } from '../../services/api';

const AboutUsPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutUsInfo();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>2m Studio Pracownia Projektowa - Portfolio - O nas</title>
      </Helmet>

      <Section>
        <Container>
          <div className={styles['wrapper']}>
            <div className={styles['content']}>
              {data && parse(data.content.rendered)}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutUsPage;
