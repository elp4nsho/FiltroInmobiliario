import * as express from 'express'
import InmuebleService from "../services/InmuebleService";
import ResponseJSON from "../libs/ResponseJSON";
import Inmueble from "../models/Inmueble";

export default class InmuebleRoute {
    public inmueble: InmuebleService;
    public route: express.Router;

    constructor() {
        this.inmueble = new InmuebleService();
        this.route = express.Router();
    }

    public router(): express.Router {
        this.route.get('/', (req, res) => {
            try {
                this.inmueble.findAll().then((listaInmuebles: Inmueble[]) => {

                   /* let paginaActual = 0;
                    let mostrar = 50;
                    let totalResultados = listaInmuebles.length;
                    let aMostrar: any[] = [];
                    let paginas = totalResultados/mostrar
                    for(let i =paginaActual*mostrar;i<(paginaActual*mostrar)+mostrar;i++){
                        aMostrar.push(listaInmuebles[i])
                    }
                    console.log(paginas)
*/
                    ResponseJSON.success(req, res, '', listaInmuebles);
                });

            } catch (e) {
                ResponseJSON.serverError(req, res, e.message, e);
            }
        });

        this.route.post('/filtro', (req, res) => {
            try {
                let body = req.body;
                this.inmueble.findByFiltros(body.comuna, body.dormitorios, body.tipoInmueble).then((listaInmuebles: Inmueble[]) => {
                    ResponseJSON.success(req, res, '', listaInmuebles);
                })

            } catch (e) {
                ResponseJSON.serverError(req, res, e.message, e);
            }
        });

        return this.route;
    }
}
