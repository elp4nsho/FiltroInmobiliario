import ResponseJSON from "./ResponseJSON";
import express from 'express'

export default class TiposDistinct {

    static parse(router: express.Router, entidad: any) {
        router.get('/', (req, res) => {
            try {
                let listaObjetos: string[] = [];
                entidad.findAll(req.query.comuna,req.query.dormitorios,req.query.tipoInmueble).then((objetos: any) => {
                    for (let obj of objetos) {
                        listaObjetos.push(obj.dataValues.nombre)
                    }
                    ResponseJSON.success(req, res, '', listaObjetos);
                })
            } catch (e) {
                ResponseJSON.serverError(req, res, e.message, e);
            }
        });
    }
}
