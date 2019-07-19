module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    require('./../blocks.04-project/nav-dynamic/nav-dynamic.tmpl-specs/base.bemjson'),
    {block: 'order', content: [
        {tag: 'form', content: [
            {elem: 'container', cls: 'container', content: [
                {block: 'h', size: 2, content: 'Оформление заказа <b>Приморский Проспект 173</b>'},
                {elem: 'inner', content: [
                    {elem: 'row', content: [
                        {elem: 'col', content: [
                            {block: 'h', size: 4, cls: 'mb-4', content: 'Контактные данные'},
                            {cls: 'form-group row', content: [
                                {cls: 'col-sm-4 col-form-label', content: 'Ваше имя'},
                                {cls: 'col-sm-8', content: [
                                    {block: 'form-control', attrs: {placeholder: 'Ваше имя'}},
                                  ]},
                              ]},
                            {cls: 'form-group row', content: [
                                {cls: 'col-sm-4 col-form-label', content: 'E-mail'},
                                {cls: 'col-sm-8', content: [
                                    {block: 'form-control', attrs: {placeholder: 'E-mail'}},
                                  ]},
                              ]},
                            {cls: 'form-group row', content: [
                                {cls: 'col-sm-4 col-form-label', content: 'Телефон'},
                                {cls: 'col-sm-8', content: [
                                    {block: 'form-control', attrs: {placeholder: '+7 (___) ___-___'}},
                                  ]},
                              ]},
                            {cls: 'form-group row', content: [
                                {cls: 'col-sm-4 col-form-label', content: 'Карта клиента (если есть)'},
                                {cls: 'col-sm-8', content: [
                                    {block: 'form-control'},
                                  ]},
                              ]},
                            {cls: 'form-group row', content: [
                                {cls: 'col-sm-4 col-form-label', content: 'Комментарий'},
                                {cls: 'col-sm-8', content: [
                                    {block: 'form-control', tag: 'textarea'},
                                  ]},
                              ]},
                          ]},
                        {elem: 'col', content: [
                            {block: 'h', size: 4, cls: 'mb-4', content: 'Способ доставки и оплаты'},
                            {cls: 'form-group', content: [
                                {cls: 'btn-group w-100', content: [
                                    {block: 'btn', content: 'Доставка'},
                                    {block: 'btn', cls: 'btn-outline-primary', content: 'Самовывоз'},
                                  ]},
                              ]},
                            {cls: 'form-group row', content: [
                                {cls: 'col-sm-2 col-form-label', content: 'Адрес'},
                                {cls: 'col-sm-10', content: [
                                    {block: 'form-control'},
                                  ]},
                              ]},
                            {cls: 'form-group', content: [
                                {block: 'custom-control', content: 'Подъем <b>350 рублей</b>'},
                              ]},
                            {tag: 'hr', cls: 'my-4'},
                            {cls: 'form-group row', content: [
                                {cls: 'col-sm-2 col-form-label', content: 'Оплата'},
                                {cls: 'col-sm-10', content: [
                                    {block: 'custom-control', props: {type: 'radio', name: 'PAY'}, content: 'Наличными'},
                                    {block: 'custom-control', props: {type: 'radio', name: 'PAY', checked: true}, content: 'Картой на сайте'},
                                    {block: 'custom-control', props: {type: 'radio', name: 'PAY'}, content: 'Картой при получении'},
                                    {block: 'custom-control', props: {type: 'radio', name: 'PAY'}, content: 'Счетом на оплату'},
                                  ]},
                              ]},
                          ]},
                        {elem: 'col', content: [
                            {block: 'h', size: 4, cls: 'mb-4', content: 'Итого'},
                            {cls: 'form-group', content: [
                                {cls: 'input-group', content: [
                                    {block: 'form-control'},
                                    {cls: 'input-group-append', content: [
                                        {block: 'btn', tag: 'button', attrs: {disabled: true}, content: 'Применить'},
                                      ]},
                                  ]},
                              ]},
                            {cls: 'form-group', content: [
                                {block: 'btn', cls: 'btn-danger btn-block btn-lg mb-2', content: 'Оформить заказ'},
                                {block: 'custom-control', content: 'Соглашение о конфиденциальности'},
                              ]},
                          ]},
                      ]},
                  ]},
              ]},
          ]},
      ]},
  ],
};
