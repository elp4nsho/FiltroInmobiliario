import * as express from 'express'
import ComunaService from "../services/ComunaService";
import TiposDistinct from "../libs/TiposDistinct";

export default class ComunaRoute{
    public comuna: ComunaService;
    public route: express.Router;
    constructor() {
        this.comuna = new ComunaService()
        this.route = express.Router();
    }
    public router(): express.Router{
        TiposDistinct.parse(this.route,this.comuna);
        return this.route;
    }
}
