import React, { useEffect, useState } from "react";
import { getPublicGists, getGistForUser } from "../services/gistService";

const GistList = ({ username }) => {
  const [gists, setGists] = useState([]);

  useEffect(() => {
    const fetchGists = async () => {
      const gistsData = await getPublicGists();

      // Here is the gist for user which is bind by seacrh bar
      // const gistsData = await getGistForUser(username);

      console.log(gistsData);
      if (gistsData) {
        setGists(gistsData.data);
      }
    };

    fetchGists();
  }, [username]);

  return (
    <div>
      <h2>All Gist</h2>
      {gists.length > 0 ? (
        <ul>
          {gists.map((gist) => (
            <li>
              <div className="card_header-wrapper">
                <div className="avatar">
                  <img src={gist.owner.avatar_url} />
                </div>
                <h3>{gist.owner.login}</h3>
                <span className="ml-auto">Files</span>
                <span>Forks</span>
                <span>{gist.comments} Comments</span>
                <span>Stars</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No gists found for the given username {username}</p>
      )}
    </div>
  );
};

export default GistList;
