module.exports = [
  {block: 'modal', cls: 'fade', attrs: {'id': 'REMOVE'}, content: [
      {elem: 'dialog', cls: 'modal-dialog-centered', content: [
          {elem: 'header', cls: 'border-0', content: [
              {elem: 'title', cls: 'mt-l', content: 'Подтверждение удаления'},
              {elem: 'close', content: {block: 'fi', mods: {icon: 'close'}}},
            ]},
          {elem: 'body', content: [
              {tag: 'p', content: 'Вы точно хотите удалить корзину «Приморский 173» со всеми её товарами?'},
              {block: 'btn', cls: 'btn-danger px-l', content: 'Удалить'},
              {block: 'btn', cls: 'btn-link px-l text-dark', content: '<b>Отмена</b>'},
            ]},
          {elem: 'footer', cls: 'border-0'},
        ]},
    ]},
];
