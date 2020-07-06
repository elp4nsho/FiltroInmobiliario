import * as express from 'express'
import TipoInmuebleService from "../services/TipoInmueble";
import TiposDistinct from "../libs/TiposDistinct";

export default class TipoInmuebleRoute{
    public tipoInmueble: TipoInmuebleService;
    public route: express.Router;
    constructor() {
        this.tipoInmueble = new TipoInmuebleService()
        this.route = express.Router();
    }
    public router(): express.Router{
        TiposDistinct.parse(this.route,this.tipoInmueble);
        return this.route;
    }
}
