// as we are using ES6 and JSX syntax, we will need to compile with Babel and preset-react
// By default all requires to node_modules will be ignored.
module.exports = {
    // ignore: [/\/(build|node_modules)\//],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        // these will allow us to use import rather than require
        '@babel/plugin-syntax-dynamic-import',
        'dynamic-import-node',
    ]
};