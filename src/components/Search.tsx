import React, { ChangeEvent } from 'react'
import styles from './Search.module.css'

const Search = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string
  setSearchValue: (value: string) => void
}) => {
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  return (
    <input
      className={styles.container}
      value={searchValue}
      onChange={(e) => handleChangeValue(e)}
      placeholder={'Поиск'}
    />
  )
}

export default Search
