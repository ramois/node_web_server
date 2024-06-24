const {envs}=require('./config/env')
const {startServer}=require('./server/server')
const main = ()=>{
 //   console.log(envs)
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH
    })
}
// funcion agnostica autoconvocada
// agnostica es que no tiene nombre
// se autoconvoca con los parectisis que estan al final de la funcion
(()=>{
    main()
})()

