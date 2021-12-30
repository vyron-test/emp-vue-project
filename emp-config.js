const { defineConfig } = require('@efox/emp');
const vue = require('@efox/plugin-vue-2');
const path = require('path');

module.exports = defineConfig({
    plugins: [vue],
    server: {
        port: 8000
    },
    appEntry: "main.js",
    empShare: {
        name: 'microProject',
        remotes: {
            '@microBase': `microBase@http://localhost:8001/emp.js`,
        },
        exposes: {
            './router': `./src/router/index.js`,
        }
    },
    webpackChain(config) {
        config.resolve.alias.set('@', path.resolve('/', 'src'));
        config.resolve.alias.set('vue', 'vue/dist/vue.esm.js');
        // config.module.rule("scss-loader").test(/\.scss$/).use("sass-loader").loader('sass-loader').options({
        //     additionalData: `@import "./src/assets/css/variables/variables.scss";`
        // });
    },
    css: {
        loaderOptions: {
            sass: {
                // prependData: `@import "./src/assets/css/variables/variables.scss";`
            }
        }
    }
});
