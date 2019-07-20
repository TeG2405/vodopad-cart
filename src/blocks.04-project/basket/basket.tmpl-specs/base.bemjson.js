module.exports = [
  {block: 'basket', content: [
      {elem: 'tools', content: [
          {elem: 'check', content: [
              {block: 'custom-control'},
            ]},
          {elem: 'controls', content: [
              {block: 'btn', cls: 'btn-primary btn-sm', content: 'Удалить'},
              {block: 'btn', cls: 'btn-primary btn-sm ml-2', content: 'Переместить'},
            ]},
          {block: 'a', content: 'Ссылка на вашу корзину'},
          {elem: 'link', mix: {block: 'fi', mods: {icon: 'print'}}, attrs: {title: 'Печать'}},
          {elem: 'link', mix: {block: 'fi', mods: {icon: 'exel'}}, attrs: {title: 'Сохранить в Exel'}},
        ]},
      ...new Array(3).fill([
        {elem: 'item', content: [
            {elem: 'check', content: [
                {block: 'custom-control'},
              ]},
            {elem: 'image', content: [
                {block: 'image', mods: {size: '60x60'}},
              ]},
            {elem: 'title', content: [
                {content: 'Смеситель термостатический Oras Nova для ванны 7446X'},
                {elem: 'code', content: 'Код товара: 30 619 062'},
              ]},
            {elem: 'availability', content: [
                {elem: 'stock', content: 'В наличии'},
              ]},
            {elem: 'price', content: [
                {block: 'price', content: '5 970'},
                {block: 'price', mods: {old: true}, cls: 'text-success', content: '5 880'},
              ]},
            {elem: 'count', content: [
                {block: 'count'},
              ]},
            {elem: 'total', content: [
                {block: 'price', cls: 'text-primary', content: '5 970'},
                {block: 'price', mods: {old: true}, content: '5 880'},
              ]},
            {elem: 'remove', content: [
                {block: 'a', mix: {block: 'fi', mods: {icon: 'close'}}},
              ]},
          ]},
      ]),
    ]},
];
