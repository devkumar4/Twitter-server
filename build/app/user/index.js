"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const types_1 = require("./types");
const queries_1 = require("./queries");
const resolvers_1 = require("./resolvers");
const mutation_1 = require("./mutation");
exports.User = { types: types_1.types, queries: queries_1.queries, resolvers: resolvers_1.resolvers, mutations: mutation_1.mutations };