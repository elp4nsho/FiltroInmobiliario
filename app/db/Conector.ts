import * as Sql from "sequelize";
import sequelize, {Sequelize} from "sequelize";

class Conector {
    private static host: string = "localhost";
    private static port: number = 5432;
    private static user: string = "postgres";
    private static pwd: string = "roota";
    private static nameDB: string = "ventasDB";

    constructor() {
    }

    private static conectar(): Sequelize{
        return new Sql.Sequelize(`postgres://${this.user}:${this.pwd}@${this.host}:${this.port}/${this.nameDB}`);
    }

    static Sequelize(){
        return this.conectar();
    }


}

export default Conector
