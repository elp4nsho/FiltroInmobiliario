import { Sequelize, DataTypes, Model} from "sequelize";
import Connector from "../db/Conector";

class Inmueble extends Model {}

Inmueble.init({
    // Model attributes are defined here
    comuna: {
        type: DataTypes.STRING
    },
    tipoInmueble: {
        type: DataTypes.STRING
    },
    esProyecto: {
        type: DataTypes.STRING
    },
    simbolo: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    metrosCuadrados: {
        type: DataTypes.STRING
    },
    dormitorios: {
        type: DataTypes.STRING
    },
    banios: {
        type: DataTypes.STRING
    },
    vendedor: {
        type: DataTypes.STRING
    },
    link: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.STRING
    },
    raw: {
        type: DataTypes.STRING
    },
    foto:{
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
    sequelize:Connector.Sequelize(), // We need to pass the connection instance
    modelName: 'inmueble', // We need to choose the model name
    timestamps:false,
    freezeTableName:true
});

export default Inmueble
