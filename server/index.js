const md5File = require('md5-file');
const path = require('path');
const babelConfig = require('../babel-config');

// ignore css, scss, images request when serving from node
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
// configure to use import rather than require going forward
require('@babel/polyfill');
require('@babel/register')(babelConfig);

// load up the server
require('./server');