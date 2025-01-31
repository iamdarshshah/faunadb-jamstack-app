import React, { useContext } from "react";

import { RefreshLinksContext } from "../App";

export default function LinkCard({ link }) {
  const loadlinks = useContext(RefreshLinksContext);
  const archiveLink = async () => {
    link.archived = true;
    try {
      await fetch("/.netlify/functions/updateLink", {
        method: "PUT",
        body: JSON.stringify(link),
      });
      loadlinks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteLink = async () => {
    const id = link._id;
    try {
      await fetch("/.netlify/functions/deleteLink", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      loadlinks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header">{link.name}</div>
      <div className="card-body">
        <a href={link.url}>{link.url}</a>
        <p>{link.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-warning mr-2" onClick={archiveLink}>
          Archive
        </button>
        <button className="btn btn-danger mr-2" onClick={deleteLink}>
          Delete
        </button>
      </div>
    </div>
  );
}
