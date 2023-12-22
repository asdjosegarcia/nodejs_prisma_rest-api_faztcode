import {Router} from "express"
import {prisma} from "../db.js"
const router=Router();
router.get('/categories',async (req,res)=>{
   const categories= await prisma.category.findMany({
    include:{
        products:true//para que incluya los productos uqe pertenecen a esa categoria
    }
   })
    res.json(categories)
})
export default router