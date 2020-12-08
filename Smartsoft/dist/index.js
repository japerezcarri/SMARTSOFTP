"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var productosRutas_1 = __importDefault(require("./rutas/productosRutas"));
//servidor
var app = express_1.default();
var port = 3000;
typeorm_1.createConnection();
//MIDLEWARES
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
//routes
app.use(productosRutas_1.default);
app.listen(port);
console.log('Puerto: ' + port);
