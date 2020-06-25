import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paths } from 'constants/routes';
import { ThemeSwitcher } from 'components';

const StyledNav = styled.nav`
  position: fixed;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary.text};
`;

const Navigation = () => {
  const { DASHBOARD, NEWS, ADMIN, QUIZ } = paths;
  return (
    <StyledNav>
      <ThemeSwitcher />
      <StyledLink to={DASHBOARD}>Strona główna</StyledLink>
      <StyledLink to={NEWS}>Aktualności</StyledLink>
      <StyledLink to={QUIZ}>Quiz</StyledLink>
      <StyledLink to={ADMIN}>Admin</StyledLink>
    </StyledNav>
  );
};

export default Navigation;
