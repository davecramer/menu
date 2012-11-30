enyo.kind({
    name: 'Fittable',
    kind: enyo.Control,
    components: [
        {
        kind: 'FittableRows',
        components: [
            {
            kind: 'FittableColumns',
            components: [
                {
                name: 'header',
                kind: 'onyx.Toolbar',
                components: [{
                    kind: "onyx.Button",
                    content: "Load content",
                    ontap: "tapload"}]}
            ]},
        {
            kind: 'FittableColumns',
            components: [{
                name: 'col1',
                fit: true
                },
            {
                name: 'col2',
                fit: true
                }]}


            ]}
    ],
    tapload: function(inSender, inEvent) {
        var data = ['item 1', 'item 2', 'item 3'];
        for (var i in data) {
            if (i % 2) {
                this.$.col1.createComponent({
                    index: i,
                    style: 'background-color:#AAA;',
                    content: 'list ' + data[i]
                });
            } else {
                this.$.col2.createComponent({
                    index: i,
                    style: 'background-color:#CCC;',
                    content: 'list ' + data[i]
                });
            }
        }
        this.$.col1.render();
        this.$.col2.render();

    }


});