import fetch from 'node-fetch';
export default class ScrappingService{
    public url: string;
    constructor() {
        this.url = "";
    }

    public obtenerDatos(): any{
        return fetch(this.url).then(d=>d.text())
    }

}
