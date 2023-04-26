import React, { useState, useEffect, useMemo } from 'react';

export function getData({ latitude, longitude }) {
  const [data, setData] = useState([]);

  const memoizedData = useMemo(() => {
    return data;
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
      );
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, [latitude, longitude]);

  return memoizedData;
}