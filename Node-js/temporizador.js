const  schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob({rule: '*/5 * * * * *'}, function() {
    console.log('executando tarefa 1!', new Date().getSeconds())  
})

