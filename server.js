import express from 'express';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import mongo from 'promised-mongo';
import { graphql } from 'graphql';
import { introspectionQuery , printSchema} from 'graphql/utilities';
import  fs from 'fs';


let app = express();
app.use(express.static('public'));

(async () => {
    // mongo sets up local db by the name you pass to it.
    const db = await mongo('graphql_tutorial');
    // pass db to the graphql schema
    let schema = Schema(db);


    app.use('/graphql', GraphQLHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3000 , () => console.log('You are live'));


    //Generate schema.json
    let json = await graphql(schema, introspectionQuery);
    fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
            if (err) throw err;

        console.log('JSON schema created');
    });
})();





