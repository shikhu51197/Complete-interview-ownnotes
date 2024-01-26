import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading to true while data is being fetched
        setLoading(true);

        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();

        // Update state with fetched data
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false once data is fetched (whether successful or not)
        setLoading(false);
      }
    };

    // Call fetchData only once when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h2>Data Fetching Component</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetchingComponent;