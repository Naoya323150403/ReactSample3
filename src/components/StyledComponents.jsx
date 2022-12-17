import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>- Styled Components -</Title>
      <Button>FIGHT!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  justify-content: space-around;
`;

const Title = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const Button = styled.button`
  background-color: #abedd8;
  border: None;
  padding: 8px;
`;
