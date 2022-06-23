import AboutText from '../../components/AboutText';
import Scrollbar from '../../components/Scrollbar';

import './styles.scss';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-container">
        <div className="content">
          <h1 className="text-center">Description</h1>
          <Scrollbar viewport={'70vh'}>
            <AboutText />
          </Scrollbar>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
