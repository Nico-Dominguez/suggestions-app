import { DB_ID, COLLECTION_ID, databases } from "./lib/appwrite";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getSuggestions();
  }, []);

  async function getSuggestions() {
    const res = await databases.listDocuments(DB_ID, COLLECTION_ID);

    console.log(res);
    setSuggestions(res.documents);
  }

  return (
    <>
      <h1>Hello</h1>
      <ul>
        {suggestions.map((suggestion) => {
          <li key={suggestion.$id}>{suggestion.text}</li>;
        })}
      </ul>
    </>
  );
}
