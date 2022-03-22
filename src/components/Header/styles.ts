import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Header = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  padding-left: 4rem;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  background: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Link = styled(RouterLink)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
`;
