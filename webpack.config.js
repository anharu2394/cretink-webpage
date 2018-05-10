module.exports = {
  mode: "development",
  context: __dirname + "/src",
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
       {
        test: /\.css/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {url: false}},
        ],
      },
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        use: [
          // linkタグに出力する機能
          'style-loader',
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              //sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            },
          },
          {
            loader: 'sass-loader',
          }
        ],
      },
    ]
  }
}
