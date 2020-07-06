import Inmueble from '../models/Inmueble';
import sequelize from "sequelize";
export default class TipoInmuebleService {
    constructor() {
    }
    public findAll(comuna: string, dormitorios: string, tipo: string): Promise<any> {
        return Inmueble.findAll({
            attributes: [[sequelize.fn('DISTINCT', sequelize.col('tipoInmueble')), 'nombre']],
            where:comuna && dormitorios ? {comuna,dormitorios}:comuna ? {comuna} : dormitorios ? {dormitorios}:{}

        });
    }
}
