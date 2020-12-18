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
exports.eliminarUsuario = exports.actualizarUsuario = exports.registrarUsuario = exports.login = exports.obtenerUsuario = exports.obtenerUsuarios = void 0;
var typeorm_1 = require("typeorm");
var Usuario_1 = require("../modelo/Usuario");
var index_1 = require("../index");
var obtenerUsuarios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, listU, _i, usuario_1, us, nom, ap, email, id, pass;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuario).find()];
            case 1:
                usuario = _a.sent();
                listU = res.json(usuario);
                for (_i = 0, usuario_1 = usuario; _i < usuario_1.length; _i++) {
                    us = usuario_1[_i];
                    nom = us.nombre;
                    ap = us.apellido;
                    email = us.correo;
                    id = us.id;
                    pass = us.contrasena;
                    index_1.client.hmset(id, {
                        'nombre': nom,
                        'apellido': ap,
                        'correo': email,
                        'contrasena': pass
                    });
                }
                /*/
                let nom = usuario[0].nombre;
                let ap = usuario[0].apellido;
                let email = usuario[0].correo;
                let id = usuario[0].id;
              
                client.set("nombre", nom, redis.print);
              
                client.get("nombre", redis.print);
              
                client.hmset('test',
                  {
                    'nombre': nom,
                    'apellido': ap,
                    'correo': email
                  });
                client.hmset('test2',
                  ['nombre2', nom,
                    'apellido2', ap,
                    'correo2', email
                  ]);
                client.hgetall('test', function (err: any, object: any) {
                  if (err) {
                    console.log(err);
                  }
                  console.log(object);
                });
                client.hgetall('test2', function (err: any, object: any) {
                  if (err) {
                    console.log(err);
                  }
                  console.log(object);
                });
                client.sadd(['lenguajes', 'css', 'nodejs', 'angular'], function (err: any, reply: any) {
                  if (err) {
                    console.log(err);
                  }
                  console.log(reply);
                });
              
                client.smembers('lenguajes', function (err: any, reply: any) {
                  if (err) {
                    console.log(err);
                  }
                  console.log(reply);
                });
              
               */
                return [2 /*return*/, res.json(usuario)];
        }
    });
}); };
exports.obtenerUsuarios = obtenerUsuarios;
var obtenerUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario;
    return __generator(this, function (_a) {
        usuario = index_1.client.hgetall(req.params.id, function (err, object) {
            if (err) {
                console.log(err);
            }
            console.log(object);
        });
        return [2 /*return*/, res.json(usuario)];
    });
}); };
exports.obtenerUsuario = obtenerUsuario;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var parametros, cont, usuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                parametros = req.body;
                cont = parametros.contrasena;
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuario).findOne(req.params.correo)];
            case 1:
                usuario = _a.sent();
                if (!usuario) {
                    return [2 /*return*/, res.json({ msg: 'El usuario no existe' })];
                }
                else {
                    if (usuario.contrasena != cont) {
                        return [2 /*return*/, res.json({ msg: 'Contraseña incorrecta' })];
                    }
                    else {
                        return [2 /*return*/, res.json(usuario)];
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var registrarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nUsuario, usu;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nUsuario = typeorm_1.getRepository(Usuario_1.Usuario).create(req.body);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuario).save(nUsuario)];
            case 1:
                usu = _a.sent();
                return [2 /*return*/, res.json(usu)];
        }
    });
}); };
exports.registrarUsuario = registrarUsuario;
var actualizarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarioA, resultado;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuario).findOne(req.params.id)];
            case 1:
                usuarioA = _a.sent();
                if (!usuarioA) return [3 /*break*/, 3];
                typeorm_1.getRepository(Usuario_1.Usuario).merge(usuarioA, req.body);
                return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuario).save(usuarioA)];
            case 2:
                resultado = _a.sent();
                return [2 /*return*/, res.json(resultado)];
            case 3: return [2 /*return*/, res.json({ msg: 'Not user found' })];
        }
    });
}); };
exports.actualizarUsuario = actualizarUsuario;
var eliminarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var resultado;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.Usuario).delete(req.params.id)];
            case 1:
                resultado = _a.sent();
                return [2 /*return*/, res.json(resultado)];
        }
    });
}); };
exports.eliminarUsuario = eliminarUsuario;
