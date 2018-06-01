import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClickHandler }) => (
    <button onClick={onClickHandler}>{label}</button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Button;
