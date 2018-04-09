const psql = require('./db/psqlAdapter').psql;

const resolver = {
    Query: {
        calculationes: (rootValue, args) => {
            const usersQuery = `select * from calculation  ('{"company":${args.company},"employees":"${args.employees}","in":"${args.in}","out":"${args.out}"}')`;
            return psql.manyOrNone(usersQuery);

        }
    }
}

module.exports = resolver