//const express = require('express');
//const path=require('path');
import express from 'express'
import path from 'path'

export const startServer =(options)=>{
    const {port,public_path='public'}=options
   const app=express()
   //para usar midlewares se usa la palabra use express
   app.use(express.static(public_path)) //contenido estatico que ponemos disponible
   // esto hace que no importa donde estemos siempre empieza del index
   app.get('*',(req, res)=>{
        const indexPath=path.join(__dirname+`../../../${public_patch}/index.html`)
        res.sendFile(indexPath)
    })
    // es para escuchar un puerto
    app.listen(port,()=>{
        console.log(` este se esta escuchando desde el puerto ${port}`)
    })

}
// exportar a lo antigu
/*module.exports={
    startServer
}*/