'use strict';

const path = require('path')

const bodyParser = require('body-parser');
const express = require('express');
const hbs = require('hbs');
const morgan = require('morgan');

const app = express();

// Определяем набор необходимых директорий
const viewsDir = path.join(__dirname, 'views');
const partialsDir = path.join(viewsDir, 'partials');
const publicDir = path.join(__dirname, 'public');

// Подключаем шаблонизатор и определяем директории, где будут храниться шаблоны
app.set('view engine', 'hbs');
app.set('views', viewsDir);
hbs.registerPartials(partialsDir)

// Логируем запросы к приложению
app.use(morgan('dev'));

// Отдаём статичные файлы. Например, файл со стилями
app.use(express.static(publicDir));

// Разбираем тело POST запроса, чтобы сохранить заметку
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Выводим ошибку, если не смогли разобрать POST запрос, и продолжаем работу
app.use((err, req, res, next) => {
    console.error(err.stack);

    next();
});

// Собираем общие данные для всех страниц приложения
app.use((req, res, next) => {
    res.locals.meta = {
        charset: 'utf-8',
        description: 'Awesome notes'
    };

    res.locals.title = 'Awesome notes';

    next();
});

// Подключаем маршруты
require('./routes')(app);

// Фиксируем фатальную ошибку и отправляем ответ с кодом 500
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.sendStatus(500);
});

// Запускаем сервер
app.listen(8080, () => console.info('Open http://localhost:8080/notes'));
