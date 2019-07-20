module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    require('./../blocks.04-project/header/header.tmpl-specs/base.bemjson'),
    {cls: 'container', content: [
        require('./../blocks.04-project/back/back.tmpl-specs/base.bemjson'),
        {block: 'h', size: 1, cls: 'mb-l mt-e', content: 'Корзины <span class="text-muted">4</span>'},
      ]},
    require('./../blocks.04-project/nav-dynamic/nav-dynamic.tmpl-specs/base.bemjson'),
    {cls: 'container', content: [
        require('./../blocks.04-project/basket/basket.tmpl-specs/base.bemjson'),
      ]},
    require('./../blocks.04-project/order/order.tmpl-specs/base.bemjson'),
  ],
};
