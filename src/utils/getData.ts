import { ICodeBlock } from '@/src/types/types'

export const getData = (): ICodeBlock[] => {
  return [
    {
      title: 'Сельское, лесное хозяйство, охота, рыболовство и рыбоводство',
      children: [
        {
          title:
            '01. Растениеводство и животноводство, охота и предоставление соответствующих услуг в этих областях',
          children: [
            {
              code: '01.11',
              title: 'Выращивание однолетних культур',
              children: [
                {
                  code: '01.11.1',
                  title: 'Выращивание зерновых культур',
                  children: [
                    {
                      code: '01.11.11',
                      title: 'Выращивание пшеницы',
                      children: null,
                    },
                    {
                      code: '01.11.12',
                      title: 'Выращивание ячменя',
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              code: '01.12',
              title: 'Выращивание зерновых',
              children: [
                {
                  code: '01.12.1',
                  title: 'Выращивание зерновых',
                  children: null,
                },
              ],
            },
          ],
        },
        {
          title: '02. Лесоводство и лесозаготовки',
          children: [
            {
              code: '02.11',
              title: ' Лесоводство и прочая лесохозяйственная деятельность',
              children: [
                {
                  code: '02.11.1',
                  title: 'Деятельность лесопитомников',
                  children: null,
                },
              ],
            },
            {
              code: '02.12',
              title: 'Лесозаготовки',
              children: [
                {
                  code: '02.12.1',
                  title: 'Выращивание зерновых',
                  children: null,
                },
              ],
            },
            {
              code: '02.13',
              title:
                'Сбор и заготовка пищевых лесных ресурсов, недревесных лесных ресурсов и лекарственных растений',
              children: [
                {
                  code: '02.13.1',
                  title: 'Сбор и заготовка пищевых лесных ресурсовх',
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Добыча полезных ископаемых',
      children: [
        {
          title: '03. Добыча угля',
          children: [
            {
              code: '03.11',
              title: 'Добыча и обогащение угля и антрацита',
              children: [
                {
                  code: '03.11.1',
                  title: 'Добыча и обогащение угля и антрацита',
                  children: null,
                },
              ],
            },
            {
              code: '03.12',
              title: 'Добыча и обогащение бурого угля (лигнита)',
              children: [
                {
                  code: '03.12.1',
                  title: 'Добыча бурого угля (лигнита)',
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ]
}
