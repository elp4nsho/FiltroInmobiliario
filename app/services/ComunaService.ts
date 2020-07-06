import Inmueble from '../models/Inmueble';
import sequelize from "sequelize";
export default class ComunaService {
    constructor() {
    }
    public findAll(comuna: string,dormitorios: string, tipo: string): Promise<any> {
        return Inmueble.findAll({
            attributes: [[sequelize.fn('DISTINCT', sequelize.col('comuna')), 'nombre']],
            where:dormitorios && tipo ? {dormitorios,tipoInmueble:tipo}:dormitorios ? {dormitorios} : tipo ? {tipo}:{}

        });
    }
}
