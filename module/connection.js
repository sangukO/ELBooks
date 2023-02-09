const { Client } = require("@elastic/elasticsearch");
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
  node: "http://localhost:9200"
  // auth: {
  //   username: process.env.ES_USERNAME,
  //   password: process.env.ES_PASSWORD
  // }
});

module.exports = client;