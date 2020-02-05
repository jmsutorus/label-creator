import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {};

function FormInput({ id, name, value, type, onChange }) {
  const handleChange = e => {
    onChange(id, e.target.value);
  };
  return (
    <div className="">
      <label htmlFor={id} className="form-label">
        <span id={id} className="form-name">
          {name}
        </span>
        <input
          className="form-input"
          placeholder={id}
          value={value}
          type={type}
          id={id}
          onChange={e => handleChange(e)}
        />
      </label>
    </div>
  );
}

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export default FormInput;
