import { ICodeBlock } from '@/src/types/types'

export const getData = (): ICodeBlock[] => {
  return [
    {
      title: 'Сельское, лесное хозяйство, охота, рыболовство и рыбоводство',
      children: [
        {
          title: '01. Растениеводство и животноводств...',
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
              code: '01.21',
              title: 'Выращивание зерновых',
              children: [
                {
                  code: '01.21.1',
                  title: 'Выращивание зерновых',
                  children: null,
                },
              ],
            },
            {
              code: '01.22',
              title: 'Выращивание зерновых',
              children: [
                {
                  code: '01.22.1',
                  title: 'Выращивание зерновых',
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
              code: '03.1',
              title: 'Добыча и обогащение угля и антрацита',
              children: [
                {
                  code: '03.10',
                  title: 'Добыча и обогащение угля и антрацита',
                  children: null,
                },
              ],
            },
            {
              code: '03.2',
              title: 'Добыча и обогащение бурого угля (лигнита)',
              children: [
                {
                  code: '03.20',
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
