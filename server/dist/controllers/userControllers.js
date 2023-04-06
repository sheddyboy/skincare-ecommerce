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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.loginUser = exports.getUsers = exports.getUser = exports.signupUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt_1.default.genSalt();
    const hashedPassword = yield bcrypt_1.default.hash(password, salt);
    return hashedPassword;
});
const comparePassword = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const validPassword = yield bcrypt_1.default.compare(password, hashedPassword);
    return validPassword;
});
const createToken = (id) => {
    return jsonwebtoken_1.default.sign(id, process.env.SECRET);
};
const getUsers = (req, res) => {
    userModel_1.default
        .find()
        .then((users) => res.status(200).json(users))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    userModel_1.default
        .findById(req.params.id)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.getUser = getUser;
const signupUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield hashPassword(req.body.password);
    userModel_1.default
        .create(Object.assign(Object.assign({}, req.body), { password: hashedPassword }))
        .then((user) => {
        const token = createToken(user.id);
        res.status(200).json({ user, token });
    })
        .catch((err) => res.status(400).json({ error: err.message }));
});
exports.signupUser = signupUser;
const loginUser = (req, res) => {
    const { email, password } = req.body;
    userModel_1.default
        .findOne({ email })
        .then((user) => __awaiter(void 0, void 0, void 0, function* () {
        const token = createToken(user === null || user === void 0 ? void 0 : user.id);
        const validPassword = yield comparePassword(password, user === null || user === void 0 ? void 0 : user.password);
        validPassword
            ? res.status(200).json({ user, token })
            : res.status(400).json({ error: "Invalid credentials" });
    }))
        .catch(() => res.status(400).json({ error: "Invalid credentials" }));
};
exports.loginUser = loginUser;
const verifyToken = (req, res) => {
    try {
        const data = jsonwebtoken_1.default.verify(req.body.token, process.env.SECRET);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
exports.verifyToken = verifyToken;
