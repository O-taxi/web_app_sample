import React from 'react';
import { Container } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <Container className="py-5">
      <h2>このアプリについて</h2>
      <p>これは FastAPI + React + Bootstrap を用いたデモアプリです。</p>
    </Container>
  );
};

export default About;