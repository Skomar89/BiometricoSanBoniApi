const psql = require('./db/psqlAdapter').psql;

const resolver = {
    Query: {
        calculationes: (rootValue, args) => {
            const usersQuery = `select id,employee,to_char(date, 'YYYY-MM-DD') as date, holiday, shedule, to_char("in", 'YYYY-MM-DD HH24:MI:SS') as "in", in_id, to_char(out, 'YYYY-MM-DD HH24:MI:SS') as out, out_id, absence, absence_night, regular, regular_night, unassigned, unassigned_night, extra, extra_night, countervailing_night, permission_id, permission, permission_night, lunch, lunch_night, delay, detail, currency  from calculation  ('{"company":${args.company},"employees":"${args.employees}","in":"${args.in}","out":"${args.out}"}')`;
            return psql.manyOrNone(usersQuery);

        }
    }
}

module.exports = resolver