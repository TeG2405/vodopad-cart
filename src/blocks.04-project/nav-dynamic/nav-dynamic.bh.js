module.exports = function(bh) {
  bh.match('nav-dynamic', function(ctx, json) {});
  bh.match('nav-dynamic__tool', function(ctx, json) {
    ctx.tag('a').attrs({
      'data-toggle': 'modal',
    });
  });
};
