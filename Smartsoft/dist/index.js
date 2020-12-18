"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.redis = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var productosRutas_1 = __importDefault(require("./rutas/productosRutas"));
var usuarioRutas_1 = __importDefault(require("./rutas/usuarioRutas"));
exports.redis = require('redis');
//servidor
var app = express_1.default();
var port = 3000;
exports.client = exports.redis.createClient({
    host: 'redis-server',
    port: 6379
});
exports.client.on('connect', function () {
    console.log('Conected to redis');
});
//ejemplo
exports.client.set('visits', 0);
//defining the root endpoint
app.get('/', function (req, res) {
    exports.client.get('visits', function (err, visits) {
        res.send('Number of visits is: ' + visits + 1);
        exports.client.set('visits', parseInt(visits) + 1);
    });
});
typeorm_1.createConnection();
//MIDLEWARES
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
//routes
app.use(productosRutas_1.default);
app.use(usuarioRutas_1.default);
app.listen(port);
console.log('Puerto: ' + port);
