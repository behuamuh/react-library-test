import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const ExampleComponent = (props: Props) => {
  const { text } = props;

  return (
    <Wrapper>
      Example Component: {text}
      <p>Coool!</p>
    </Wrapper>
  );
};

export default ExampleComponent;

const Wrapper = styled.div`
  background-color: red;
`;
