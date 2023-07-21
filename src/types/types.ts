export interface ICodeBlock {
  title: string
  children: ICodeBlock[] | null
  code?: string
}
