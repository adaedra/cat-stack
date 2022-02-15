import express from 'express'

const app = express()

app.get('/', (_, res) => res.send('Meow'))

app.listen(3000)
