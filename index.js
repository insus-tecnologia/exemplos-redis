import { createClient } from 'redis'

(async () => {
    //const mysql = require('mysql2')
    // const redisClient = createClient({
    //     host: 'localhost:6379',
    //     no_ready_check: true,
    //     auth_pass: 'RedisInsus!',   
    // })
    const redisClient = createClient();
    redisClient.on('error', (err) => console.log('Redis Client Error', err))

    await redisClient.connect()
    
    const returnCreate = await redisClient.set('testKey', 'testValue')
    console.log(returnCreate)

    const returnGet = await redisClient.get('testKey')
    console.log(returnGet)
})()