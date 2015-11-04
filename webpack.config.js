module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style!css!autoprefixer!sass' },
            { test: /\.css$/, loader: "style!css" },
            {test: /\.js$/, loader: "babel"}
        ]
    }
};

