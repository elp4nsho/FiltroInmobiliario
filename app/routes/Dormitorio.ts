import * as express from 'express'
import DormitorioService from "../services/DormitorioService";
import TiposDistinct from "../libs/TiposDistinct";

export default class DormitorioRoute{
    public dormitorio: DormitorioService;
    public route: express.Router;
    constructor() {
        this.dormitorio = new DormitorioService()
        this.route = express.Router();
    }
    public router(): express.Router{
        TiposDistinct.parse(this.route,this.dormitorio);
        return this.route;
    }
}
