const axios = require("axios");
require("dotenv").config();
const formattedResponse = require("./utils/formattedResponse");
const { CREATE_LINK } = require("./utils/linkQueries.js");
const sendQuery = require("./utils/sendQuery");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return formattedResponse(405, { err: "Method not Supported" });
  }
  const { name, url, description } = JSON.parse(event.body);
  const variables = { name, url, description, archived: false };
  try {
    const { createlink: createdLink } = await sendQuery(CREATE_LINK, variables);
    return formattedResponse(200, createdLink);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
