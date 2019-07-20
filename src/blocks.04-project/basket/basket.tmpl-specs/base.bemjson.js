module.exports = [
  {block: 'basket', content: [
      {elem: 'table', content: [
          {elem: 'tools', content: [
              {elem: 'item', content: [
                  {elem: 'row', cls: 'align-items-center', content: [
                      {elem: 'col', mods: {main: true}, content: [
                          {elem: 'row', cls: 'align-items-center', content: [
                              {elem: 'col', mods: {check: true}, content: [{block: 'custom-control'}]},
                              {elem: 'col', mods: {controls: true}, content: [
                                  {block: 'btn', cls: 'btn-primary btn-sm', attrs: {'data-toggle': 'modal', 'href': '#REMOVE'}, content: 'Удалить'},
                                  {block: 'btn', cls: 'btn-primary btn-sm ml-3', attrs: {'data-toggle': 'modal', 'href': '#MOVE'}, content: 'Переместить'},
                                ]},
                            ]},
                        ]},
                      {elem: 'col', mods: {addition: true}, content: [
                          {elem: 'row', cls: 'align-items-center justify-content-end', content: [
                              {elem: 'col', mods: {controls: true}, content: [
                                  {block: 'a', attrs: {'data-toggle': 'modal', 'href': '#SHARE'}, content: 'Ссылка на вашу корзину'},
                                  {elem: 'link', mix: {block: 'fi', mods: {icon: 'print'}}, attrs: {title: 'Печать'}},
                                  {elem: 'link', mix: {block: 'fi', mods: {icon: 'exel'}}, attrs: {title: 'Сохранить в Exel'}},
                                ]},
                            ]},
                        ]},
                    ]},
                ]},
            ]},
          {elem: 'header', content: [
              {elem: 'item', content: [
                  {elem: 'row', content: [
                      {elem: 'col', mods: {main: true}, content: [
                          {elem: 'row', content: [
                              {elem: 'col', mods: {check: true}},
                              {elem: 'col', mods: {image: true}, content: 'Фото'},
                              {elem: 'col', mods: {title: true}, content: 'Описание'},
                              {elem: 'col', mods: {availability: true}, content: 'Наличие'},
                            ]},
                        ]},
                      {elem: 'col', mods: {addition: true}, content: [
                          {elem: 'row', cls: 'justify-content-between', content: [
                              {elem: 'col', mods: {price: true}, content: 'Цена'},
                              {elem: 'col', mods: {count: true}, content: 'Количество'},
                              {elem: 'col', mods: {total: true}, content: 'Сумма'},
                              {elem: 'col', mods: {remove: true}},
                            ]},
                        ]},
                    ]},
                ]},
            ]},
          {elem: 'body', content: [
              ...new Array(3).fill([
                {elem: 'item', content: [
                    {elem: 'row', mods: {item: true}, content: [
                        {elem: 'col', mods: {main: true}, content: [
                            {elem: 'row', mods: {main: true}, content: [
                                {elem: 'col', mods: {check: true}, content: [{block: 'custom-control'}]},
                                {elem: 'col', mods: {image: true}, content: [{block: 'image', mods: {size: '60x60'}}]},
                                {elem: 'col', mods: {title: true}, content: [
                                    'Смеситель термостатический Oras Nova для ванны 7446X',
                                    {elem: 'code', content: 'Код товара: 30 619 062'},
                                    {elem: 'stock', cls: 'mt-2 d-xl-none', content: 'В наличии'},
                                  ]},
                                {elem: 'col', mods: {availability: true}, content: [
                                    {elem: 'stock', content: 'В наличии'},
                                  ]},
                              ]},
                          ]},
                        {elem: 'col', mods: {addition: true}, content: [
                            {elem: 'row', mods: {addition: true}, cls: 'justify-content-between', content: [
                                {elem: 'col', mods: {price: true}, content: [
                                    {block: 'price', content: '5 970'},
                                    {block: 'price', mods: {old: true}, cls: 'text-success', content: '5 880'},
                                  ]},
                                {elem: 'col', mods: {count: true}, content: [{block: 'count'}]},
                                {elem: 'col', mods: {total: true}, content: [
                                    {block: 'price', cls: 'text-primary', content: '5 970'},
                                    {block: 'price', mods: {old: true}, content: '5 880'},
                                  ]},
                                {elem: 'col', mods: {remove: true}, content: [
                                    {block: 'a', mix: {block: 'fi', mods: {icon: 'close'}}},
                                  ]},
                              ]},
                          ]},
                      ]},
                  ]},
              ]),
            ]},
        ]},
    ]},
];

