import React, { useEffect, useState } from 'react'
import CodeItem from '@/src/components/CodeItem'
import { ICodeBlock } from '@/src/types/types'

const CodeBlock = ({
  code,
  level,
  selectedCodes,
  setSelectedCodes,
  setIsUpOpenList,
  isSelectedCheckbox,
}: {
  code: ICodeBlock
  level: number
  selectedCodes: string[]
  setSelectedCodes: (value: string[]) => void
  setIsUpOpenList?: (value: boolean) => void
  isSelectedCheckbox?: boolean
}) => {
  const [isOpenList, setIsOpenList] = useState(false)

  const handleOpenList = () => {
    setIsOpenList((open) => !open)
  }

  useEffect(() => {
    if (code.code ? selectedCodes.includes(code.code) : false) {
      setIsUpOpenList && setIsUpOpenList(true)
    }
  }, [])

  useEffect(() => {
    if (isOpenList) {
      setIsUpOpenList && setIsUpOpenList(true)
    }
  }, [isOpenList, setIsUpOpenList])

  const isCheckedCheckbox = code.code
    ? selectedCodes?.includes(code.code)
    : false

  return (
    <>
      <CodeItem
        title={code.title}
        code={code.code}
        level={level}
        selectedCodes={selectedCodes}
        setSelectedCodes={setSelectedCodes}
        handleOpenList={handleOpenList}
        isCloseButton={!!code.children}
        isOpenList={isOpenList}
        isCheckedCheckbox={isCheckedCheckbox}
        isSelectedCheckbox={isSelectedCheckbox}
      />
      {code.children && (
        <div
          style={{
            display: isOpenList ? 'block' : 'none',
          }}
        >
          {code.children.map((data) => (
            <CodeBlock
              key={data.code || data.title}
              code={data}
              level={level + 1}
              selectedCodes={selectedCodes}
              setSelectedCodes={setSelectedCodes}
              setIsUpOpenList={setIsOpenList}
              isSelectedCheckbox={isCheckedCheckbox || isSelectedCheckbox}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default CodeBlock
