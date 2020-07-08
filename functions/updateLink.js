require("dotenv").config();
const formattedResponse = require("./utils/formattedResponse");
const { UPDATE_LINK } = require("./utils/linkQueries.js");
const sendQuery = require("./utils/sendQuery");

exports.handler = async (event) => {
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
