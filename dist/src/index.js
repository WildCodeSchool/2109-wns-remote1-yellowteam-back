"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./server"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
const { PORT } = process.env;
(async () => {
    const server = await (0, server_1.default)();
    await server.start();
    server.applyMiddleware({
        app: app_1.default,
        cors: {
            origin: '*',
        },
    });
    const serverStartLogs = () => {
        console.log(`Server running on http://localhost:${PORT || 4000}/ 🪐🌶️. `);
        console.log(`GraphQL running on http://localhost:5000${server.graphqlPath}. 👍🐉`);
    };
    await new Promise((resolve) => app_1.default.listen(PORT || 4000, () => {
        resolve(serverStartLogs());
    }));
})();
