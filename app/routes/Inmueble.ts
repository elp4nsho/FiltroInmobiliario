import * as express from 'express'
import Inmueble from '../models/Inmueble';
const router = express.Router()

router.get('/', (req, res) => {

    Inmueble.findAll().then(d=>{
        console.log(d);
    })

    res.status(200).json({
        code: 200,
        message: null || 'success',
        data: null,
    });
})

export default router;
