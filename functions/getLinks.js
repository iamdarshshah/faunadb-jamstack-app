const axios = require("axios");
require("dotenv").config();
const formattedResponse = require("./utils/formattedResponse");
const { GET_LINKS } = require("./utils/linkQueries.js");
const sendQuery = require("./utils/sendQuery");

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_LINKS);
    const data = res.allLinks.data;
    return formattedResponse(200, data);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
