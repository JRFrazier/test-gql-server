var express = require("express");
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");
var cors = require("cors");
const api_helper = require("./API_helper");
const request = require("request");

// GraphQL schema
var schema = buildSchema(`
    type Query {
        fiction: [fiction]
    },
    type price {
      hardcover: Int
      paperback: Int
    },
    type fiction {
        title: String
        author: String
        publisher: String
        pages: Int 
        image: [String]
        price: price
    }
`);
var bookData = [
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    publisher: "Bantam Books",
    pages: 694,
    image: ["large-image.jpg", "small-image.jpg"],
    price: { hardcover: 13, paperback: 10 }
  },
  {
    title: "Harry Potter and The Chamber of Secrets",
    author: "J. K. Rowling",
    publisher: "Bloomsbury Publishing",
    pages: 360,
    image: ["large-image.jpg", "small-image.jpg"],
    price: { hardcover: 15, paperback: 9 }
  },
  {
    title: "Ready Player One",
    author: "Ernest Cline",
    publisher: "Random House",
    pages: 385,
    image: ["large-image.jpg", " small-image.jpg"],
    price: { hardcover: 13, paperback: 9 }
  }
];
var app = express();

const getAllCourses = () => {
  return bookData;
};

const getDig = () => {
  console.log(theDig);
  return theDig;
};

var root = {
  fiction: getAllCourses
};
// Create an express server and a GraphQL endpoint
var app = express();

app.use(
  "/graphql",
  cors(),
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
