"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.busquedaProd = exports.eliminarProducto = exports.actualizarProducto = exports.crearProducto = exports.obtenerProducto = exports.obtenerProductos = void 0;
var typeorm_1 = require("typeorm");
var Producto_1 = require("../modelo/Producto");
var redis = require('redis');
var obtenerProductos = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Producto_1.Producto).find({
                    order: {
                        id: "ASC",
                    }
                })];
            case 1:
                productos = _a.sent();
                return [2 /*return*/, res.json(productos)];
        }
    });
}); };
exports.obtenerProductos = obtenerProductos;
var obtenerProducto = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var prod;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Producto_1.Producto).findOne(req.params.id)];
            case 1:
                prod = _a.sent();
                return [2 /*return*/, res.json(prod)];
        }
    });
}); };
exports.obtenerProducto = obtenerProducto;
var crearProducto = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nProducto, prod;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nProducto = typeorm_1.getRepository(Producto_1.Producto).create(req.body);
                return [4 /*yield*/, typeorm_1.getRepository(Producto_1.Producto).save(nProducto)];
            case 1:
                prod = _a.sent();
                return [2 /*return*/, res.json(prod)];
        }
    });
}); };
exports.crearProducto = crearProducto;
var actualizarProducto = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var prodA, resultado;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Producto_1.Producto).findOne(req.params.id)];
            case 1:
                prodA = _a.sent();
                if (!prodA) return [3 /*break*/, 3];
                typeorm_1.getRepository(Producto_1.Producto).merge(prodA, req.body);
                return [4 /*yield*/, typeorm_1.getRepository(Producto_1.Producto).save(prodA)];
            case 2:
                resultado = _a.sent();
                return [2 /*return*/, res.json(resultado)];
            case 3: return [2 /*return*/, res.json({ msg: 'No se encuentra producto' })];
        }
    });
}); };
exports.actualizarProducto = actualizarProducto;
var eliminarProducto = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var prodA;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Producto_1.Producto).delete(req.params.id)];
            case 1:
                prodA = _a.sent();
                return [2 /*return*/, res.json(prodA)];
        }
    });
}); };
exports.eliminarProducto = eliminarProducto;
var busquedaProd = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var parametros, busqueda, prodA;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                parametros = req.body;
                busqueda = parametros.busqueda;
                return [4 /*yield*/, typeorm_1.getRepository(Producto_1.Producto).find({
                        where: [{ nombre: busqueda },
                            { categoria: busqueda }]
                    })];
            case 1:
                prodA = _a.sent();
                return [2 /*return*/, res.json(prodA)];
        }
    });
}); };
exports.busquedaProd = busquedaProd;
