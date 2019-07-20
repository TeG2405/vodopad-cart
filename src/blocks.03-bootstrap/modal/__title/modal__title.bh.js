module.exports = function(bh) {
    bh.match('modal__title', function(ctx, json) {
        ctx
            .tag('h4')
            .mix({block: 'modal-title'});
    });
};
