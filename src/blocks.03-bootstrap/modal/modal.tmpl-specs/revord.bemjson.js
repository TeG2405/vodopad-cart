module.exports = [
  {block: 'modal', cls: 'fade', attrs: {'id': 'REWORD'}, content: [
      {elem: 'dialog', cls: 'modal-dialog-centered', content: [
          {elem: 'header', cls: 'border-0', content: [
              {elem: 'title', cls: 'mt-l', content: 'Переименовать'},
              {elem: 'close', content: {block: 'fi', mods: {icon: 'close'}}},
            ]},
          {elem: 'body', content: [
              {tag: 'p', content: 'Новое название пункта меню'},
              {cls: 'input-group', content: [
                  {block: 'form-control', attrs: {value: 'Приморский 173'}},
                  {cls: 'input-group-append', content: [
                      {block: 'btn', tag: 'button', cls: 'btn-danger', content: 'Применить'},
                    ]},
                ]},
            ]},
          {elem: 'footer', cls: 'border-0'},
        ]},
    ]},
];
