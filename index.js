const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('./schema')
const cors = require('cors')

const app = express()

app.use(
    '/graphql',
    bodyParser.json(),
    cors(),
    graphqlExpress({
        schema,
        formatError: (error) => {
            return {
                mensaje: error.message
            }
        }
    })
)

app.use(
    '/apiBiometrico',
    graphiqlExpress({
        endpointURL: '/graphql'
    })
)


const PORT = 8282

app.listen(PORT, () => {
    console.log('SERVIDOR OK');
})