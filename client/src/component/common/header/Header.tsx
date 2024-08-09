import React from "react";
import { HeaderContainer, HeaderInner } from "./StyleHeader";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Link to="/">Molt.</Link>
        <div>
          <span></span>Molt
        </div>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
