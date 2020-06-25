import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFullScreen = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FullScreen = ({ children }) => <StyledFullScreen>{children}</StyledFullScreen>;

FullScreen.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default FullScreen;
