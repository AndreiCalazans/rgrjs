import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

let Schema = (db) =>{

//DUMMY data
    let counter = 42;
    let data = [{counter: 33},{counter: 33},{counter: 44}];


//TYPES
let linkType = new GraphQLObjectType({
    name: "Counter",
    fields: () => ({
        _id: {type: GraphQLString },
        title: {type: GraphQLString },
        url: {type: GraphQLString }
        
    })
});

const Query = new GraphQLObjectType({
            name: 'Query',
            fields: () => ({
                counter: {
                    type: GraphQLInt,
                    resolve: () => counter
                },
                links: {
                    type: new GraphQLList(linkType),
                    resolve: () => db.links.find({}).toArray()
                }
            })
        });


const Mutation = new GraphQLObjectType({
            name: 'Mutation',
            fields: () => ({
                incrementCounter: {
                    type: GraphQLInt,
                    resolve: () => ++counter
                }
            })
        });



    let schema = new GraphQLSchema({
        query: Query ,

        mutation: Mutation
    });
    return schema
}
export default Schema;