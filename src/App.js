import React, { useEffect, useState } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";

// Pull all the links
// Display all the links
// Add, delete, update and archive functionality
export const RefreshLinksContext = React.createContext();

function App() {
  const [links, setLinks] = useState([]);
  const loadLinks = async () => {
    try {
      const res = await fetch("/.netlify/functions/getLinks");
      const links = await res.json();
      setLinks(links);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">List O' Link</h1>
      <RefreshLinksContext.Provider value={loadLinks}>
        <LinkForm />
        <LinkList links={links} />
      </RefreshLinksContext.Provider>
    </div>
  );
}

export default App;
