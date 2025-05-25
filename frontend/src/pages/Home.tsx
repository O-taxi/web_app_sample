import React, { useEffect, useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';

const Home: React.FC = () => {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const res = await fetch('http://192.168.0.65:8000/api/hello');
    const data = await res.json();
    setMessage(data.message);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <Container className="py-5">
      <h1 className="mb-4">FastAPI + React + Bootstrap</h1>
      {message && <Alert variant="success">{message}</Alert>}
      <Button onClick={fetchMessage}>再取得</Button>
    </Container>
  );
};

export default Home;
