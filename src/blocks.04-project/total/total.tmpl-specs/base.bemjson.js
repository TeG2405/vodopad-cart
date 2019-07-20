module.exports = [
  {block: 'total', content: [
      {elem: 'row', content: [
          {elem: 'label', content: '3 товара'},
          {elem: 'value', content: [
              {block: 'price', mods: {old: true}, content: '18 880'},
              {block: 'price', content: '26 542'},
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
              {block: 'price', content: '350'},
            ]},
        ]},
      {elem: 'row', cls: 'text-success', content: [
          {elem: 'label', content: 'Скидка по промокоду'},
          {elem: 'value', content: [
              {block: 'price', content: '- 350'},
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
              {block: 'price', mods: {old: true}, content: '14 390'},
              {block: 'price', mods: {large: true}, content: '26 750'},
            ]},
        ]},
    ]},
];
