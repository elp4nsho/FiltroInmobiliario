import * as express from 'express'
import ScrappingService from "../services/ScrappingService";
import ResponseJSON from "../libs/ResponseJSON";
import cheerio from 'cheerio';
import Inmueble from "../models/Inmueble";

export default class ScrapingRoute {
    public scrappingService: ScrappingService;
    public route: express.Router;

    constructor() {
        this.scrappingService = new ScrappingService()
        this.route = express.Router();
    }

    public router(): express.Router {

        this.route.post("/", ((req, res) => {
            this.scrappingService.url = req.body.url;
            this.scrappingService.obtenerDatos().then((datosLink: any) => {
                let datos: any = {}
                const $ = cheerio.load(datosLink)
                const nombreDesc = $('meta[name=description]').attr('content')?.split(',')[0].toLowerCase();
                let fotos: any = [];
                $("img[alt='" + nombreDesc + "']").each((d: any, o: any) => fotos.push(o.attribs.src));

                datos.fotos = fotos

                Inmueble.findOne({where: {link: req.body.url}}).then(
                    (inmuebl: any) => {
                        if (inmuebl.foto == null) {
                            let miniatura = $("meta[property='og:image']")[0].attribs.content
                            console.log("Miniatura encontrada: "+miniatura)
                            Inmueble.update({foto: miniatura}, {where: {link: req.body.url}}).then(result => {
                                console.log("foto añadida")
                            })
                        }
                    })
                //console.log($("#sectionDynamicMap")[0]);
                ResponseJSON.success(req, res, '', datos);
            })
        }));

        return this.route;
    }
}
