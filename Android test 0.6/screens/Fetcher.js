import React, { useState, useEffect } from "react";

export function getData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
      );
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);
  return data;
}
