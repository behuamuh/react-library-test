import React from 'react';

interface Props {
  text: string;
}

const ExampleComponent = (props: Props) => {
  const { text } = props;

  return (
    <div className="test">
      Example Component: {text}
      <p>Coool!</p>
    </div>
  );
};

export default ExampleComponent;
