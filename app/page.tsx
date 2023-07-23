'use client'

import styles from './page.module.css'
import Search from '@/src/components/Search'
import { useLocalStorage } from '@/src/hooks/useLocalStorage'
import React, { useEffect, useMemo, useState } from 'react'
import { getData } from '@/src/utils/getData'
import { ICodeBlock } from '@/src/types/types'
import CodeBlock from '@/src/components/CodeBlock'
import { useDebounce } from '@/src/hooks/useDebouce'
import { filterTreeObject } from '@/src/utils/filterTreeObject'

export default function Home() {
  const [selectedCodes, setSelectedCodes] = useLocalStorage<string[]>(
    'selectedCodes',
    []
  )
  const [codeList, setCodeList] = useState<ICodeBlock[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const debouncedSearchValue = useDebounce(searchValue, 300)

  const filteredCodeList = useMemo((): any => {
    if (!debouncedSearchValue) return codeList
    return filterTreeObject(codeList, debouncedSearchValue).filter(
      (item) => item
    )
  }, [codeList, debouncedSearchValue])

  const clearAllSelectedCodes = () => {
    setSelectedCodes([])
  }

  useEffect(() => {
    const data = getData()
    setCodeList(data)
    setIsLoading(false)
  }, [])

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Коды ОКВЭД</h2>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {isLoading ? (
        <div>Загрузка...</div>
      ) : !filteredCodeList.length ? (
        <div>Результатов не найдено</div>
      ) : (
        <>
          <button
            onClick={clearAllSelectedCodes}
            className={styles.clearButton}
            disabled={!selectedCodes.length}
          >
            Очистить выбранные коды
          </button>
          {filteredCodeList.length ? (
            <div className={styles.list}>
              {filteredCodeList?.map((data, index) => (
                <CodeBlock
                  key={data.code ?? data.title}
                  code={data}
                  level={0}
                  selectedCodes={selectedCodes}
                  setSelectedCodes={setSelectedCodes}
                />
              ))}
            </div>
          ) : null}
        </>
      )}
    </main>
  )
}
