import express, { Response as ExResponse, Request as ExRequest } from "express";
import { RegisterRoutes } from "./build/routes";
import { iocContainer } from "./inversify.config";
import { InversifyExpressServer } from 'inversify-express-utils';

class App {
    public express;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    private middleware(): void {
        //middleware
        this.express.use(express.json());
        throw new Error("Method not implemented.");
    }

    private routes(): void {
        RegisterRoutes(this.express);
    }
}

// iocContainer (Inversify container), null for the custom router and null for the custom context as parameters.
//  The last parameter is the Express application instance (new App().express)
export default new InversifyExpressServer(
    iocContainer, null, null, new App().express);
