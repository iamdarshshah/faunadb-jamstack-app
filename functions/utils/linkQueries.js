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

module.exports = {
  GET_LINKS,
};
