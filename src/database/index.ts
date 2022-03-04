import { createConnection } from "typeorm";


const dataServer = createConnection()

dataServer.then(connection => console.log('Connection database was succefully 👌')).catch(err => console.log(err))