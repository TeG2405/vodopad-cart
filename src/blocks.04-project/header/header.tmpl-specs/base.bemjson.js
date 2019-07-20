module.exports = [
  {block: 'header', content: [
      {cls: 'container', content: [
          {elem: 'inner', content: [
              {elem: 'logo', content: [
                  {block: 'a', content: [
                      {block: 'image', mods: {size: '210x45'}, cls: 'text-center', content: [
                          {block: 'img', mods: {lazy: true}, src: '/images/logo.svg'},
                        ]},
                    ]},
                ]},
              {elem: 'phone', content: [
                  {cls: 'mb-2', content: [
                      'Интернет-магазин',
                      {block: 'a', content: '8 812 600-50-20'},
                    ]},
                  {content: [
                      'Розничная сеть',
                      {block: 'a', content: '8 812 600-50-20'},
                    ]},
                ]},
            ]},
        ]},
    ]},
];
