import React from 'react'
import Checkbox from '@/src/components/Checkbox'
import ArrowDown from '@/src/icons/ArrowDown'
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
}: {
  title: string
  code?: string | undefined
  level: number
  isOpenList: boolean
  isCloseButton: boolean
  selectedCodes: string[]
  setSelectedCodes: (value: string[]) => void
  handleOpenList: () => void
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
    >
      <div className={styles.content}>
        {code ? (
          <Checkbox
            checked={selectedCodes?.includes(code)}
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
          onClick={handleOpenList}
        >
          <ArrowDown />
        </div>
      ) : null}
    </div>
  )
}

export default CodeItem
