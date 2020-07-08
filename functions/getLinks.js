const axios = require("axios");
require("dotenv").config();

exports.handler = async (event) => {
  const GET_LINKS = `
    query {
        allLinks {
          data {
            name
            url
            description
            _id
            archived
          }
        }
      }
    `;
  const { data } = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query: GET_LINKS,
      varibles: {},
    },
  });
  console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
