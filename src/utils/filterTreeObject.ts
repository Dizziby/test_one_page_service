import { ICodeBlock } from '@/src/types/types'

export const filterTreeObject = (list: ICodeBlock[], searchValue: string) => {
  return list.map((item) => {
    if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return item
    } else {
      if (item.children && item.children.length) {
        const filteredItems = filterTreeObject(
          item.children,
          searchValue
        ).filter((item) => item)
        return filteredItems.length
          ? { ...item, children: filteredItems }
          : null
      } else {
        return null
      }
    }
  })
}
