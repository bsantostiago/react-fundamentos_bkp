import { NavLink } from "react-router-dom";
import { StyledMenu } from "../styles/styles.js";

function Menu() {
  return (
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </StyledMenu>
  );
}

export default Menu;
