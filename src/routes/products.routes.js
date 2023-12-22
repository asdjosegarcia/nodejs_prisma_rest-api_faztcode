import { Router } from "express"
import { prisma } from '../db.js'//importamos el contenido del archibo db.js (la lalmada a prismaclient)
const router = Router();

router.get('/products', async (req, res) => {//maneja la solicitud get
    const products = await prisma.product.findMany()//alamacenamos la respuesta de prisma en prodcuts
    res.json(products)//envia los productos json obtenidos
    // res.send('products')
})
router.get('/products/:id', async (req, res) => {
    const productFound=await prisma.product.findFirst({
        where: {
            id: +req.params.id
        },
        include:{//incluye a que categoria pertence en la respuesta
            category:true,
        }
    })
    if(!productFound){//si no hay producto respondemos con un 404
        return res.status(404).json({error:"Product not found"});
    }
    return res.json(productFound)
})

router.post('/products', async (req, res) => {//req y res son la peticion y la respuesta
    const newProduct = await prisma.product.create({//creamos un producto
        data://
        req.body//enviamos el producto como data
        
    })
    res.json(newProduct)// 
})
router.delete('/products/:id', async (req, res) => {
    const porductDeleted=await prisma.product.delete({
        where: {
            id: +req.params.id
        } 
    })
    if(!porductDeleted){//si no hay producto respondemos con un 404
        return res.status(404).json({error:"Product not found"});
    }
    return res.json(porductDeleted)
})
router.put('/products/:id', async (req, res) => {
const productUpdated=await prisma.product.update({
    where:{
        id:parseInt(req.params.id)//por alguna razon a qui no funciona el +
    },
    data:req.body
})
return res.json(productUpdated)
})
export default router//exportamos el router para que sea utilizable en otros  archivos