import React, { useEffect, useState } from 'react'
import CodeItem from '@/src/components/CodeItem'
import { ICodeBlock } from '@/src/types/types'

const CodeBlock = ({
  code,
  level,
  selectedCodes,
  setSelectedCodes,
  setIsUpOpenList,
}: {
  code: ICodeBlock
  level: number
  selectedCodes: string[]
  setSelectedCodes: (value: string[]) => void
  setIsUpOpenList?: (value: boolean) => void
}) => {
  const [isOpenList, setIsOpenList] = useState(false)

  const handleOpenList = () => {
    setIsOpenList((open) => !open)
  }

  useEffect(() => {
    if (code.code ? selectedCodes.includes(code.code) : false) {
      setIsUpOpenList && setIsUpOpenList(true)
    }
  }, [code.code, selectedCodes, setIsUpOpenList])

  useEffect(() => {
    if (isOpenList) {
      setIsUpOpenList && setIsUpOpenList(true)
    }
  }, [isOpenList, setIsUpOpenList])

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
      />
      {code.children && (
        <div
          style={{
            display: isOpenList ? 'block' : 'none',
          }}
        >
          {code.children.map((data, index) => (
            <CodeBlock
              key={data.code || data.title}
              code={data}
              level={level + 1}
              selectedCodes={selectedCodes}
              setSelectedCodes={setSelectedCodes}
              setIsUpOpenList={setIsOpenList}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default CodeBlock
