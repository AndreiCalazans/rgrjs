import express from 'express';
let app = express();
import mongoose from 'mongoose';
import {Schema } from 'mongoose';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import graphql from 'graphql';
mongoose.connect('mongodb://localhost:relay/relay');

const LinksSchema = new Schema({
    title: String,
    url: String
});

const Links = mongoose.model('links', LinksSchema);

// Links({title: "Google" , url: "www.google.com"}).save();

app.use(express.static('public'));

app.use('/graphql', GraphQLHTTP({
    schema: schema,
    graphiql: true
}))

app.get('/data/links' , (req, res) => {
    Links.find({}).then((links) => res.json(links));
})


app.listen(3000 , () => console.log('You are live'));

