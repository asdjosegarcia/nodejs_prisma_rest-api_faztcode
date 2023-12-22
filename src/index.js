//nota: en package.json agregamos "type":"module", para usar los modulos de ECMACScript envesde los de common js 
//ndemon es un paquete que instalamos con npm para que el proyecto se actualize automaticamente con cambios
//añadimos el script "dev" para que nodemon ejecute el servidor de desarrollo
import express from "express"

import productroutes from './routes/products.routes.js'//importamos la ruta definida para porductos
import categoriesroutes from './routes/categories.routes.js'

const app= express()//instancia de express
app.use(express.json()) //configura express para analizar las soliciturdes como JSON
app.use('/api',productroutes)//asociamos la ruta de productos a rutas especificas en la aplicacion
app.use('/api',categoriesroutes)

app.listen(3000) //iniciamos el servidor en el puerto 3000
console.log('Server on port',3000)