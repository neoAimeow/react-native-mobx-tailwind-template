module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo', 'mobx'],
        plugins: [
            ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
            'nativewind/babel',
            '@babel/plugin-transform-flow-strip-types',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-private-methods',
        ],
    };
};
