import { FC } from 'react';

const AboutText: FC = () => {
  return (
    <>
      <h3 style={{ padding: '2rem 0 1rem' }}>[ Intro ]</h3>
      <p>The project main idea is to get better author&apos;s skills in developing complex web solutions, meeting various valuable frontend and backend technologies and sometimes have fun spending time on a lovely hobby.</p>
      <h3 style={{ padding: '2rem 0 1rem' }}>
          [ Technology stack * ]</h3>
      <h5>Frontend</h5>
      <ul>
        <li>Single page application with <b>React JS</b> (FC, hooks)</li>
        <li><b>Typescript</b></li>
        <li>Styles preprocessing (<b>Sass</b>)</li>
      </ul>
      {/* <h5>Backend</h5>
      <ul>
        <li><b>Node JS</b> (improved with <b>Express JS</b> framework)</li>
        <li>NoSQL database <b>MongoDB</b> and related framework <b>Mongoose</b></li>
        <li><b>Typescript</b></li>
        <li><b>BcryptJS</b> and <b>Jsonwebtoken</b> are responsible for application security</li>
        <li>Server-side rendering engine (<b>Handlebars</b>)</li>
        <li>Data validation improved with <b>Joi</b></li>
      </ul>
      <p style={{ padding: '0 0 1rem' }}>*the list will probably grow</p> */}
    </>
  );
};

export default AboutText;
