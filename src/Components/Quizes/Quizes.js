import React from 'react';
import Quiz from '../Quiz/Quiz';

import Row from 'react-bootstrap/Row';

function Quizes({ quizes }) {
  return (
    <Row xs={1} md={2} className="g-4">
      {quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)}
    </Row>
  );
}

export default Quizes;