const { makeExecutableSchema } = require('graphql-tools')

const resolvers = require('./../resolvers')


const typeDefs = `

type Calculation{
    id:String!
    employee:Int!
    date:String!
    holiday:Int!
    shedule:Int!
    in:String
    in_id:Int!
    out:String
    out_id:Int!
    absence:Int!
    absence_night:Int!
    regular:Int!
    regular_night:Int!
    unassigned:Int!
    unassigned_night:Int!
    extra:Int!
    extra_night:Int!
    countervailing_night:Int!
    permission_id:Int!
    permission:Int!
    permission_night:Int!
    lunch:Int!
    lunch_night:Int!
    delay:Int!
    detail:String
    currency:Int!
}

type Query{
    #Datos de la función biometrico
    calculationes(company:Int!,employees:String!,in:String!,out:String!):[Calculation]
}


`

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

module.exports = schema