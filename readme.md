## Сборщик модулей webpack ##

## Lesson 01 ##

## Философия Webpack ##
Основные принципы философии Webpack:  
- Что угодно может быть модулем
- Загружайте только то, что вам нужно и когда вам нужно

## Почему webpack ##
- Серверная часть
- Всеобщая система сборки
- Динамическая подгрузка
- Препроцессоры
- Live reload

**Создадим файлы**
    src/home.js
    src/welcome.js
    index.html
    webpack.config.js

**Инсталяция:**
---

[Несколько полезностей по работе с NPM](https://habr.com/post/206678/)
```
npm init

npm install webpack --save-dev  
npm install webpack-cli --save-dev
npm install webpack-dev-server
```
Можно установить сразу несколько плагинов одной командой
```
npm i -D webpack webpack-cli webpack-dev-server
```
Запускаем наше приложение 
```
node_modules\.bin\webpack
```
Инсталяция static Сервера  

browser -> http://127.0.0.1:8080/
```
npm install --save-dev node-static (npm i -D node-static)
node_modules\.bin\static
```

Запускаем в консоли команду webpack  
**Отключить кэш в браузере**
![Отключить кэш в браузере](https://i.stack.imgur.com/mIy1W.jpg "Отключить кэш в браузере")
    

2. Minimum config  
- **Entry** передает в Webpack данные о том, где находится корневой модуль или точка входа. 
```
config -> 
    entry : String, Array, Object
```
- **output**  –  path и publicPath  
Свойство path сообщает Webpack, где хранить результат, тогда как свойство publicPath для production-сборок. Как пример URL для CDN.
```
output: {
    filename: 'index.js',
}
```
- **Global variable / Внешний доступ к модулям**

```
home.js-> 
export {welcome};

output: {
    library: 'lib'
}
```


3. Пересборка при изменениях  
```
config -> 
watch: true,
watchOptions: {aggregateTimeout: 300}, // Default
```

4. Отладка, Source maps  
```
mode : 'development'
devtool: 'source-map',
```

5. Окружение, NODE_ENV 
[Environment variables](//webpack.js.org/guides/environment-variables/)  

If you want to change the behavior according to the mode variable inside the webpack.config.js, you have to export a function instead of an object:
```
function (env, argv) {
    console.log(env)
	return {}
}
```
```
const IS_DEV_MODE = env.NODE_ENV === 'production' ?  'production' : 'development';
watch: isDevMode,
mode: isDevMode,
```
```  
webpack --env.NODE_ENV=development
```
6. Plugins   
```
const webpack = require('webpack');
```
```
home.js -> if(process.env.IS_DEV_MODE)
...
new webpack.EnvironmentPlugin({
  'IS_DEV_MODE': JSON.stringify(true)
});
```
**OR**
```
home.js -> if(IS_DEV_MODE)
new webpack.DefinePlugin
```

7. Babel.JS 

```
npm i --save-dev babel-core babel-loader@7
npm i --save-dev babel-preset-env babel-preset-es2015 babel-preset-stage-0 babel-preset-react

rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets:  ['es2015', 'stage-0',  'react']
            }
        }
    }
]
```
8. CSS / SASS
**Style-loader** нужен нам для инджекта стилей в head.  
**CSS-loader**, для того, чтобы мы могли импортировать css в js.  
```
import css from './more/file.css';
npm i -D style-loader css-loader
{
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}
```
**SCSS**
```
npm i -D sass-loader node-sass
{
    test: /\.scss$/,
    use: [{
        // creates style nodes from JS strings
        loader: "style-loader" 
    }, {
        // translates CSS into CommonJS
        loader: "css-loader" 
    }, {
        // compiles Sass to CSS
        loader: "sass-loader" 
    }]
}
```   
## Lesson 02 ##

**Несколько точек входа**  
```
Create file about.js
    entry to Object
    entry: {
        home:'src/home',
        about:'src/about'
    }
    output: {
        filename: '[name].js'
        library: '[name]'
    }
```

Добавим свойство контекст чтобы не писать его в entry каждый раз
```
path.resolve(__dirname, 'frontend'),
context: __dirname + 'src'
```
**Common JS**
```
new webpack.optimize.CommonsChunkPlugin(options);
name: 'commons'
```
common.js содержит явные модули в которых мы нуждаемся

**Dynamic Imports**  
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  
https://webpack.js.org/guides/code-splitting/#dynamic-imports
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  
button.js and dynamic.js  
 *The **legacy**, webpack-specific approach is to use **require.ensure***
```
publicPath: '/dist/' - webpack обязан его знать так как скрипты будет подгружать динамически
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
path: path.resolve(__dirname, "src/main/webapp/dist/"),
```
```
"plugins": ["syntax-dynamic-import"]
npm install --save-dev @babel/plugin-syntax-dynamic-import
```
**Информация о сборке**
```
webpack --display-modules 
webpack --display-modules -v
webpack --json --profile > stats.json
```

Интерактивно просмотреть граф зависимости  
[http://webpack.github.io/analyse/](http://webpack.github.io/analyse/)


**Visual Studio plugins**
---
- [Open in Browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)
- [Markdown Preview Github Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles)

**Структура проекта**  
```
├── dist                 - папка, куда будет собираться сайт  
├─┬ src                  - папка с исходниками сайта  
│ ├── favicon            - папка с файлами иконок для сайта  
│ ├── fonts              - папка со шрифтами  
│ ├─┬ html               - папка заготовок HTML страниц  
│ │ ├── includes         - папка с встраиваемыми шаблонами (header, footer)  
│ │ └── views            - папка с самими HTML страницами  
│ ├── img                - папка с общими изображениями (логотип, иконки и др.)  
│ ├── js                 - папка с JavaScript файлами  
│ ├── scss               - папка с SСSS файлами  
│ └── uploads            - папка с файлами статей (картинки, архивы и др.)  
├── package.json         - файл настроек Node.js  
└── webpack.config.js    - файл настроек Webpack  
```
**Литература**
- https://webpack.js.org/
- https://habr.com/post/347812/
- https://habr.com/company/plarium/blog/309230/
- [Путь JavaScript модуля](https://habrahabr.ru/post/181536/)
- [Скринкаст WEBPACK](http://learn.javascript.ru/screencast/webpack)
- [Простой статический сайт на Webpack 4](https://habr.com/post/350886/)

**Генератор WEBPACK **
- https://generatewebpackconfig.netlify.com/