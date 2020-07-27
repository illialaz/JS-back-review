const express = require(`express`)
const app = express()

app.get('/', (req, res) => res.send(`Hello, world!`))
// app.post('/', (req, res) => res.send(`Hello, world!`))
// app.put('/', (req, res) => res.send(`Hello, world!`))
// app.delete('/', (req, res) => res.send(`Hello, world!`))
// app.patch('/', (req, res) => res.send(`Hello, world!`))
app.listen(3000, () => console.log('The server is ready'))

