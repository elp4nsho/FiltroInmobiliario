import express from 'express'
import * as bodyParser from 'body-parser';
import cors from 'cors'
import ComunaRoute from './routes/Comuna';
import TipoInmuebleRoute from "./routes/TipoInmueble";
import InmuebleRoute from "./routes/Inmueble";
import DormitorioRoute from "./routes/Dormitorio";
import ScrapingRoute from "./routes/ScrapingRoute";
class App {
    public express: express.Application;
    private port: number = 8080;

    constructor() {

        this.express = express()
        this.express.use(bodyParser.json({limit: '50mb'}))
        this.express.use(cors())
        this.express.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'content-type');
            next();
        })
        this.loadRoutes()
        this.initServer();

    }

    private loadRoutes(): void {
        this.express.use('/comunas', new ComunaRoute().router());
        this.express.use('/tipos', new TipoInmuebleRoute().router());
        this.express.use('/dormitorios', new DormitorioRoute().router());
        this.express.use('/scrap', new ScrapingRoute().router());
        this.express.use('/inmuebles', new InmuebleRoute().router());
    }

    private initServer(): void {
        this.express.listen(this.port);
    }
}

export default new App().express;
