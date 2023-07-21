import React, { ChangeEvent } from 'react'

const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: (checked: boolean) => void
}) => {
  const handleChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    onChange(e.target.checked)
  }

  return (
    <input
      checked={checked}
      onChange={handleChangeChecked}
      type="checkbox"
      style={{ cursor: 'pointer' }}
    />
  )
}

export default Checkbox
