import * as S from "./styles";

const Header: React.FC = () => (
  <S.Header>
    <S.Link to="/">🏡 Home</S.Link>
    <S.Link to="/launches">🛰 Launches</S.Link>
  </S.Header>
);

export default Header;
