import React from 'react'

const FormRows = ({ name, type, handleChange, value, labelName }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelName ||
          name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase()}
      </label>
      <input
        id={name || labelName}
        className='form-input'
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}
export default FormRows
