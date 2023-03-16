const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    class Singleton {
        constructor() {
            this.message = 'I am an instance';
        }
    }
    module.exports = new Singleton();
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})