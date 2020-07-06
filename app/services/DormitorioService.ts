import Inmueble from '../models/Inmueble';
import sequelize from "sequelize";
export default class DormitorioService {
    constructor() {
    }
    public findAll(comuna: string, dormitorios: string, tipo: string): Promise<any> {
        return Inmueble.findAll({
            attributes: [[sequelize.fn('DISTINCT', sequelize.col('dormitorios')), 'nombre']],
            order:[['dormitorios','ASC']],
            where:comuna && tipo ? {comuna,tipoInmueble:tipo}:comuna ? {comuna} : tipo ? {tipo}:{}

        });
    }
}
