const md5File = require('md5-file');
const path = require('path');

// ignore css, images request when serving from node
const ignoreStyles = require('ignore-styles');

const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg'];

const register = ignoreStyles.default;
register(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {
    if (!extensions.find(f => filename.endsWith(f))) {
        // style
        return ignoreStyles.noOp();
    } else {
        // image
        const hash = md5File.sync(filename).slice(0, 8);
        const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);
        mod.exports = `/static/media/${bn}`;
    }
});

// as we are using ES6 and JSX syntax, we will need to compile with Babel and preset-react
require('@babel/polyfill');
require('@babel/register')({
    ignore: [/\/(build|node_modules)\//],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        // these will allow us to use import rather than require
        '@babel/plugin-syntax-dynamic-import',
        'dynamic-import-node',
    ]
});

// load up the server
require('./server');