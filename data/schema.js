import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

let Schema = (db) =>{

    let counter = 42;
    let data = [{counter: 33},{counter: 33},{counter: 44}];

    let linkType = new GraphQLObjectType({
        name: "Counter",
        fields: () => ({
            _id: {type: GraphQLString },
            title: {type: GraphQLString },
            url: {type: GraphQLString }
            
        })
    });

    let schema = new GraphQLSchema({
        query: new GraphQLObjectType({
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
        }),

        mutation: new GraphQLObjectType({
            name: 'Mutation',
            fields: () => ({
                incrementCounter: {
                    type: GraphQLInt,
                    resolve: () => ++counter
                }
            })
        })
    });
    return schema
}
export default Schema;