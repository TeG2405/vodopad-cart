module.exports = function(bh) {
    bh.match('custom-control__input', function(ctx, json) {
        ctx
            .tag('input')
            .mix({block: 'custom-control-input'})
            .attrs({
                type: 'checkbox',
                id: ctx.tParam('ID'),
                name: ctx.tParam('ID'),
                value: ctx.generateId(),
            });
    });
};
