module.exports = function(bh) {
    bh.match('custom-control__label', function(ctx, json) {
        ctx
            .tag('label')
            .mix({block: 'custom-control-label'})
            .attr('for', ctx.tParam('ID'));
    });
};
