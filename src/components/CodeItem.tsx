import React from 'react'
import Checkbox from '@/src/components/common/Checkbox'
import ArrowDownIcon from '@/src/icons/ArrowDownIcon'
import styles from './CodeItem.module.css'

const CodeItem = ({
  title,
  code,
  level,
  isCloseButton,
  isOpenList,
  selectedCodes,
  setSelectedCodes,
  handleOpenList,
  isCheckedCheckbox,
  isSelectedCheckbox,
}: {
  title: string
  code?: string | undefined
  level: number
  isOpenList: boolean
  isCloseButton: boolean
  selectedCodes: string[]
  setSelectedCodes: (value: string[]) => void
  handleOpenList: () => void
  isCheckedCheckbox: boolean
  isSelectedCheckbox: boolean
}) => {
  const handleSelectedCodes = (checked: boolean) => {
    if (!code) return
    if (checked) {
      setSelectedCodes([...selectedCodes, code])
    } else {
      const filteredSelectedCodes = selectedCodes.filter(
        (item) => item !== code
      )
      setSelectedCodes(filteredSelectedCodes)
    }
  }

  return (
    <div
      className={styles.container}
      style={{ paddingLeft: `${10 + level * 20}px` }}
      onClick={handleOpenList}
    >
      <div className={styles.content}>
        {code ? (
          <Checkbox
            isChecked={isCheckedCheckbox}
            isSelected={isSelectedCheckbox}
            onChange={(checked) => handleSelectedCodes(checked)}
          />
        ) : null}
        <div
          className={styles.title}
          style={{ fontWeight: code ? '' : '500' }}
        >
          {code ? code : null} {title}
        </div>
      </div>
      {isCloseButton ? (
        <div
          className={styles.arrow}
          style={{ transform: isOpenList ? 'rotate(180deg)' : '' }}
        >
          <ArrowDownIcon />
        </div>
      ) : null}
    </div>
  )
}

export default CodeItem
