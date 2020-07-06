import Inmueble from '../models/Inmueble';

/*
*
* obtener distintos  select distinct on (direccion) * from inmueble order by direccion
*
*
* */

export default class InmuebleService {
    constructor() {
    }

    public findAll(): Promise<Inmueble[]> {
        return Inmueble.findAll({
            limit: 500,
            order:[['comuna','ASC']],

        });
    }

    public findByFiltros(comuna: string, dormitorios: string, tipoInmueble: string): Promise<Inmueble[]> {
        return Inmueble.findAll({
            where: comuna && dormitorios && tipoInmueble ? {comuna, dormitorios, tipoInmueble} :
                comuna && dormitorios ? {comuna, dormitorios} :
                    comuna && tipoInmueble ? {comuna, tipoInmueble} :
                        dormitorios && tipoInmueble ? {dormitorios, tipoInmueble} :
                            comuna ? {comuna} :
                                dormitorios ? {dormitorios} :
                                    tipoInmueble ? {tipoInmueble} : {}
            ,
            limit: 100
        })
    }


}
