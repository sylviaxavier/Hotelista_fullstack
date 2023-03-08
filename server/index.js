//import usersRoutes from './routes/usuarios.js'
import router from './routes/usuarios.js'

import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'


const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const porta = 5000

app.use(cors())
app.use(router)

app.listen(porta, ()=>{ console.log(`Servidor em atividade na porta: http://localhost:${porta}`)})