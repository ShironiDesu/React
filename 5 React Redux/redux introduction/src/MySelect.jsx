import React from 'react'

export default function MySelect({ defaultValue, options ,onChange,}) {
  return (
    <div><select  onChange={(e)=>{onChange(e.target.value)}}>
    <option value="" disabled>
      {defaultValue}
    </option>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.text}
      </option>
    ))}
  </select></div>
  )
}
