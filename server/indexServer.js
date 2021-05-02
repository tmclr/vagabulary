"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const body_parser_1 = __importDefault(require("body-parser"));
const promises_1 = require("fs/promises");
const rootPath = path_1.resolve(__dirname, '..');
process.chdir(rootPath);
const app = express_1.default();
app.listen(8002);
app.get('/hi', (_request, response) => {
    response.send(String(new Date()));
});
app.use(express_1.default.static(path_1.resolve(rootPath, 'public')));
app.engine('.hbs', express_handlebars_1.default({
    defaultLayout: 'main',
    extname: '.hbs',
}));
app.set('view engine', '.hbs');
app.get('/', (_request, response) => {
    response.render('index', {
        message: 'Привет, Мир!',
        title: 'Главная страница',
    });
});
app.get('/about', (_request, response) => {
    response.render('about', {
        title: 'О сайте',
    });
});
const jsonParser = body_parser_1.default.json();
const feedbacksFile = path_1.resolve(rootPath, 'feedback.json');
app.post('/api/form/feedback', jsonParser, async (request, _response) => {
    const data = request.body;
    let feedbacks;
    try {
        const content = await promises_1.readFile(feedbacksFile, 'utf8');
        feedbacks = JSON.parse(content);
    }
    catch (_error) {
        feedbacks = [];
    }
    feedbacks.push(data);
    await promises_1.writeFile(feedbacksFile, JSON.stringify(feedbacks), 'utf8');
    //response.send( 'OK' );
});
//# sourceMappingURL=indexServer.js.map