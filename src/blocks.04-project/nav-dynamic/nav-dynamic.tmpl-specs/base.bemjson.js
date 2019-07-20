module.exports = [
  {block: 'nav-dynamic', content: [
      {elem: 'container', content: [
          {elem: 'slider', content: [
              {elem: 'control', mods: {prev: true}, mix: {block: 'fi', mods: {icon: 'chevron-left'}}},
              {elem: 'list', content: [
                  ...['Основная', ...new Array(3).fill('Приморский 173')].map((text, index) => ([
                    {elem: 'li', content: [
                        {elem: 'item', cls: index ? '': 'active', content: [
                            {elem: 'link', content: [
                                {elem: 'title', content: text},
                                {elem: 'badge', content: '10'},
                              ]},
                            {elem: 'tool', mix: {block: 'fi', mods: {icon: 'pen'}}, attrs: {title: 'Переименовать'}},
                            {elem: 'tool', mix: {block: 'fi', mods: {icon: 'close'}}, attrs: {title: 'Удалить'}},
                          ]},
                      ]},
                  ])),
                  {elem: 'li', content: [
                      {block: 'btn', cls: 'btn-outline-secondary btn-block', content: '+ Новая корзина'},
                    ]},
                ]},
              {elem: 'control', mods: {next: true}, mix: {block: 'fi', mods: {icon: 'chevron-right'}}},
            ]},
        ]},
    ]},
];
