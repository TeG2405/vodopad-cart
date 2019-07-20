module.exports = function(bh) {
  bh.match('count', function(ctx, json) {
    ctx.content([
      {elem: 'control', mix: {block: 'fi', mods: {icon: 'minus'}}},
      {elem: 'input', tag: 'input', attrs: {value: '1'}},
      {elem: 'control', mix: {block: 'fi', mods: {icon: 'plus'}}},
    ]);
  });
};
