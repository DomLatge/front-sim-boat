import { useState, useEffect } from "react";

import BoatList from "../components/boat/BoatList";

function AllBoatsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBoats, setLoadedBoats] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://simboat-7dc8b-default-rtdb.asia-southeast1.firebasedatabase.app/boat.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const boats = [];

        for (const key in data) {
          const boat = {
            id: key,
            ...data[key],
          };
          boats.push(boat);
        }
        setIsLoading(false);
        setLoadedBoats(boats);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Boats</h1>
      <BoatList boats={loadedBoats} />
    </section>
  );
}

export default AllBoatsPage;
