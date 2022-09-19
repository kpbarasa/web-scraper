const PORT = 8000
const app = require('./app-main')

app.listen(PORT, ()=>{
    console.log("server listening on port: "+PORT);
})
