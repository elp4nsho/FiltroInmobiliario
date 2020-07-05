import express from 'express'
import router from './routes/Inmueble';
import * as bodyParser from 'body-parser';
class App {
    public express: express.Application;
    private port: number = 3000;
    constructor() {
        this.express = express()
        this.express.use(bodyParser.json({ limit: '50mb' }))
        this.loadRoutes()
        this.initServer();
    }
    private loadRoutes(): void {
        this.express.use('/', router);
    }
    private initServer(): void{
        this.express.listen(this.port);
    }
}
export default new App().express;
