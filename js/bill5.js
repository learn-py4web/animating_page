"use strict";

// This will be the object that will contain the Vue attributes
// and be used to initialize it.
let app = {};

app.data = {    
    data: function() {
        return {
            // Complete as you see fit.
            entree: 0,
            dessert: 0,
            tip: 0.20,
            total: 0,
        };
    },
    methods: {
        // Complete as you see fit.
        update: function() {
            // This is an example.
            this.total = (this.entree + this.dessert) * (1 + this.tip);
        },
        set_tip: function(tip) {
            this.tip = tip;
            this.update();
        }
    }
};

app.vue = Vue.createApp(app.data).mount("#app");
