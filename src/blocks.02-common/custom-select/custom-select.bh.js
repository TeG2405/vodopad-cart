module.exports = function(bh) {
  bh.match('custom-select', function(ctx, json) {
    ctx.tag('select');
    Array.isArray(ctx.content()) &&
    ctx.content(
      ctx.content().map((item) => {
        if (ctx.isSimple(item)) return {tag: 'option', attrs: {value: ctx.generateId()}, content: item};
        return item;
      }),
      true
    );
  });
};
