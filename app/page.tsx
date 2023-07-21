'use client'

import styles from './page.module.css'
import Search from '@/src/components/Search'
import { useLocalStorage } from '@/src/hooks/useLocalStorage'
import React, { useEffect, useMemo, useState } from 'react'
import { getData } from '@/src/utils/getData'
import { ICodeBlock } from '@/src/types/types'
import CodeBlock from '@/src/components/CodeBlock'
import { useDebounce } from '@/src/hooks/useDebouce'

export default function Home() {
  const [selectedCodes, setSelectedCodes] = useLocalStorage<string[]>(
    'selectedCodes',
    []
  )
  const [codeList, setCodeList] = useState<ICodeBlock[]>([])
  const [searchValue, setSearchValue] = useState('')

  const debouncedSearchValue = useDebounce(searchValue, 500)

  const filteredCodeList = useMemo(() => {
    if (!debouncedSearchValue) return codeList

    return codeList
  }, [codeList, debouncedSearchValue])

  console.log(filteredCodeList, 'filteredCodeList_filteredCodeList')

  useEffect(() => {
    const data = getData()
    setCodeList(data)
  }, [])

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Коды ОКВЭД</h2>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
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
      ) : (
        <div>Результатов не найдено</div>
      )}
    </main>
  )
}
