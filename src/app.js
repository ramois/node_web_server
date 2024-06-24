//const {envs}=require('./config/env')
import {envs} from './config/env.js';
//const {startServer}=require('./server/server')
import {startServer} from './server/server.js';
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

