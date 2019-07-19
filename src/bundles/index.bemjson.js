module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    {cls: 'container', content: [
        {block: 'h', size: 1, content: 'Корзина'},
      ]},
    require('./../blocks.04-project/nav-dynamic/nav-dynamic.tmpl-specs/base.bemjson'),
  ],
};
