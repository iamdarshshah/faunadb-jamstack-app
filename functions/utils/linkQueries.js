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

const CREATE_LINK = `
    mutation ($name: String!, $url: String!, $description: String!) {
        createLink(data: {name: $name, url: $url, description: $description, archived: false}) {
            name
            url
            description
            archived
            _id
        }
    }
`;

module.exports = {
  GET_LINKS,
  CREATE_LINK,
};
