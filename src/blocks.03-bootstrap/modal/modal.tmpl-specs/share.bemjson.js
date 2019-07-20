module.exports = [
  {block: 'modal', cls: 'fade', attrs: {'id': 'SHARE'}, content: [
      {elem: 'dialog', cls: 'modal-dialog-centered', content: [
          {elem: 'header', cls: 'border-0', content: [
              {elem: 'title', cls: 'mt-l', content: 'Поделиться корзиной'},
              {elem: 'close', content: {block: 'fi', mods: {icon: 'close'}}},
            ]},
          {elem: 'body', content: [
              {tag: 'p', content: 'Скопируйте ссылку, чтобы поделиться ей.'},
              {cls: 'input-group', content: [
                  {block: 'form-control', attrs: {value: 'https://www.vodopad.ru/basket.html?basket_hash='}},
                  {cls: 'input-group-append', content: [
                      {block: 'btn', tag: 'button', cls: 'btn-danger', content: 'Скопировать'},
                    ]},
                ]},
            ]},
          {elem: 'footer', cls: 'border-0'},
        ]},
    ]},
];
