import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 3rem;
  font-size: 2rem;

  & img {
    max-width: 60%;
  }
`;
