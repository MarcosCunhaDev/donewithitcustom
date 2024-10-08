import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

export interface LocationI {
  latitude: number;
  longitude: number;
}


const useLocation = () => {
  const [location, setLocation] = useState<LocationI | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);


  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { location, errorMsg };
};

export default useLocation;
