import express from 'express'
import * as QueryString from "querystring";
export default class ResponseJSON {
    constructor() {}

    static success(req: express.Request, res: express.Response, message: string, data: any) {
        console.log("DESDE: "+req.url)
        console.log("DATA QUE SALE -> "+data.length)
        // @ts-ignore
        let mostrar = data.length >= 100 ? req.query.mostrar > data.length ? 100 : req.query.mostrar || 100:data.length;
        let totalResultados = data.length;
        let aMostrar: any[] = [];
        let paginas: any = totalResultados/mostrar;
        // @ts-ignore
        let paginaActual: any = paginas == 1 ? 0: req.query.pag >= paginas ? paginas-1 :parseInt(req.query.pag) || 0;

        for(let i =paginaActual*mostrar;i<(paginaActual*mostrar)+mostrar;i++){
            aMostrar.push(data[i])
        }
        res.status(200).json({
            code: 200,
            resultados:data.length,
            paginas,
            mostrando:mostrar+" resultados",
            paginaActual,
            message: message || 'success',
            data: aMostrar,
        });
    }
    static serverError(req: express.Request, res: express.Response, message: string, data: string) {
        res.status(500).json({
            code: 500,
            message: message || 'internal server error',
            data: data,
        });
    }
}
