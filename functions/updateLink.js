const axios = require("axios");
require("dotenv").config();
const formattedResponse = require("./utils/formattedResponse");
const { UPDATE_LINK } = require("./utils/linkQueries.js");
const sendQuery = require("./utils/sendQuery");

exports.handler = async (event) => {
  if (event.httpMethod !== "PUT") {
    return formattedResponse(405, { err: "Method not Supported" });
  }
  const { name, url, description, archived, _id: id } = JSON.parse(event.body);
  const variables = { name, url, description, id, archived };
  try {
    const { updateLink: updatedLink } = await sendQuery(UPDATE_LINK, variables);
    return formattedResponse(200, updatedLink);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
