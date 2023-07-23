import React, { MouseEvent } from 'react'
import CheckIcon from '@/src/icons/CheckIcon'
import styles from './Checkbox.module.css'

const Checkbox = ({
  isChecked,
  isSelected,
  onChange,
}: {
  isChecked: boolean
  isSelected: boolean
  onChange: (checked: boolean) => void
}) => {
  const handleChangeChecked = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onChange(!isChecked)
  }

  const backgroundColorCheckbox =
    !isChecked && !isSelected ? '' : isChecked ? '#ddeadf' : '#e0e0e0'
  const colorCheckbox =
    !isChecked && !isSelected ? '' : isChecked ? '#41ad49' : '#b4b4b4'
  const borderCheckbox = isChecked || isSelected ? '' : 'solid 1px grey'

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: backgroundColorCheckbox,
        color: colorCheckbox,
        border: borderCheckbox,
      }}
      onClick={handleChangeChecked}
    >
      {isChecked || isSelected ? <CheckIcon /> : null}
    </div>
  )
}

export default Checkbox
