module.exports = [
  {block: 'modal', cls: 'fade', attrs: {'id': 'MOVE'}, content: [
      {elem: 'dialog', cls: 'modal-dialog-centered modal-lg', content: [
          {elem: 'header', cls: 'border-0', content: [
              {elem: 'title', cls: 'mt-l', content: 'Переместить выбранные товары (1)'},
              {elem: 'close', content: {block: 'fi', mods: {icon: 'close'}}},
            ]},
          {elem: 'body', content: [
              {cls: 'mb-l', content: [
                  require('./../../../blocks.04-project/nav-dynamic/nav-dynamic.tmpl-specs/list.bemjson'),
                ]},
              {tag: 'p', content: [
                  'Или создайте новую корзину',
                  {block: 'btn', cls: 'btn-outline-secondary btn-sm px-l ml-m d-inline-flex align-items-center', content: [
                      {block: 'fi', cls: 'mr-3', mods: {icon: 'plus'}},
                      'Новая корзина',
                    ]},
                ]},
            ]},
          {elem: 'footer', cls: 'border-0'},
        ]},
    ]},
];
