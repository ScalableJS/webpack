Документация
 - https://webpack.js.org/concepts/
 - https://habr.com/post/347812/

Генератор
- https://generatewebpackconfig.netlify.com/

Почему webpack
- Серверная часть
- Всеобщая система сборки
- Динамическая подгрузка
- Препроцессоры
- Live reload

Создадим файлы
    src/home.js
    src/wellcom.js
    index.html
    webpack.config.js

Инсталяция:
https://habrahabr.ru/post/206678/
    npm init
    npm install --save-dev webpack (npm i -D webpack)
    npm install --save-dev webpack-cli (npm i -D webpack-cli)
    npm install --save-dev webpack webpack-cli
    node_modules\.bin\webpack

Инсталяция Сервера
browser -> http://127.0.0.1:8080/
    npm install --save-dev node-static (npm i -D node-static)
    node_modules\.bin\static
    https://habr.com/post/222803/

Запускаем в консоли команду webpack

Отключить кэш в браузере
    https://stackoverflow.com/questions/38555285/node-static-js-file-isnt-refreshing

2) Внешний доступ к модулям
    home.js -> exports.welcome = welcome;
    config -> output: {library: 'lib'}

3) Пересборка при изменениях
    config -> 
    watch: true,
    watchOptions: {aggregateTimeout: 300}, // Default

4) Отладка, Source maps
    mode : 'development'

5) Окружение, NODE_ENV
    //webpack.js.org/guides/environment-variables/
    const NODE_ENV = process.env.NODE_ENV || 'development';
    watch: NODE_ENV === 'development',
    mode: NODE_ENV === 'development',


    SET NODE_ENV=production node_modules\.bin\webpack
    pckage.json ->
    "scripts": {
        "dev": "webpack --mode development",
        "build": "webpack --mode production"
    }
    
    webpack --env.NODE_ENV=local
    const NODE_ENV = env.production || 'development';

    //new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']);
    set NODE_ENV=production && node_modules\\.bin\\webpack
    https://webpack.js.org/guides/environment-variables/

6) Babel.JS
import welcome from './welcome.js';
import css from './file.scss';
    npm i babel-core babel-loader babel-preset-env babel-cli babel-preset-es2015 --save-dev
    
    
    npm install style-loader css-loader --save-dev
    
    npm install sass-loader node-sass --save-dev

    rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'es2015',
							]
						}
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.scss$/,
					use: [{
						loader: "style-loader" // creates style nodes from JS strings
					}, {
						loader: "css-loader" // translates CSS into CommonJS
					}, {
						loader: "sass-loader" // compiles Sass to CSS
					}]
				}
			],
    "style-loader", // creates style nodes from JS strings
    "css-loader", // translates CSS into CommonJS
    "sass-loader" // compiles Sass to CSS, using Node Sass by default
    
    https://github.com/babel/babel-loader
    https://webpack.js.org/loaders/babel-loader/#src/components/Sidebar/Sidebar.jsx



Visual Studio plugin
    open in browser (TechER)

Путь JavaScript модуля
    https://habrahabr.ru/post/181536/

????Динамическая сборка
    

