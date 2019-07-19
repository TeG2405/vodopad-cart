module.exports = [
  {block: 'total', content: [
      {elem: 'row', content: [
          {elem: 'label', content: '3 товара'},
          {elem: 'value', content: [
              {elem: 'old', cls: 'mr-3', content: [
                  '18 880',
                  {block: 'fi', mods: {icon: 'rub'}},
                ]},
              {content: [
                  '26 542',
                  {block: 'fi', mods: {icon: 'rub'}},
                ]},
            ]},
        ]},
      {elem: 'row', content: [
          {elem: 'label', content: 'Доставка'},
          {elem: 'value', content: 'Бесплатно'},
        ]},
      {elem: 'row', content: [
          {elem: 'label', content: [
              {elem: 'tool', mix: {block: 'fi', mods: {icon: 'close'}}, attrs: {title: 'Удалить'}},
              {content: 'Подъем'},
            ]},
          {elem: 'value', content: [
              '350',
              {block: 'fi', mods: {icon: 'rub'}},
            ]},
        ]},
      {elem: 'row', cls: 'text-success', content: [
          {elem: 'label', content: 'Скидка по промокоду'},
          {elem: 'value', content: [
              '- 350',
              {block: 'fi', mods: {icon: 'rub'}},
            ]},
        ]},
      {cls: 'my-3', content: [
          {cls: 'input-group', content: [
              {block: 'form-control'},
              {cls: 'input-group-append', content: [
                  {block: 'btn', tag: 'button', attrs: {disabled: true}, content: 'Применить'},
                ]},
            ]},
        ]},
      {elem: 'row', content: [
          {elem: 'label', content: 'К оплате '},
          {elem: 'value', content: [
              {elem: 'old', cls: 'mr-3', content: [
                  '14 390',
                  {block: 'fi', mods: {icon: 'rub'}},
                ]},
              {elem: 'large', content: [
                  '26 750',
                  {block: 'fi', mods: {icon: 'rub'}},
                ]},
            ]},
        ]},
    ]},
];
