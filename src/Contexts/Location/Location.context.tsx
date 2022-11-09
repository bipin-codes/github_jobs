import { createContext, useState, PropsWithChildren, useEffect } from "react";

export interface ILocation {
  status: boolean;
  message: string;
  loading: boolean;
  location: GeolocationPosition | undefined;
}

const defaultLocation: ILocation = {
  status: false,
  message: "",
  location: undefined,
  loading: true,
};

export const LocationContext = createContext({ userLocation: defaultLocation });

export const LocationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userLocation, setUserLocation] = useState(defaultLocation);
  const [permissionStatus, setPermissionStatus] = useState("");

  const value = { userLocation };

  const onSuccess = (data: GeolocationPosition) => {
    setUserLocation({
      status: true,
      message: "Location fetched Successfully!",
      location: data,
      loading: false,
    });
  };

  const onError = (data: GeolocationPositionError) => {
    const { code } = data;
    let msgForUser = "There was some error while fetching your location.";
    if (code === 1) {
      msgForUser =
        "To get Jobs that are closer to you, please give permissions.";
    } else if (code === 2) {
      msgForUser =
        "Location Unavailable right now, fetching jobs for default city.";
    } else if (code === 3) {
      msgForUser = "Location request timed out. Please reload the Page.";
    }

    setUserLocation({
      status: false,
      message: msgForUser,
      location: undefined,
      loading: false,
    });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, [permissionStatus]);

  useEffect(() => {
    const listenToPermissionChanged = async () => {
      try {
        const result = await navigator.permissions.query({
          name: "geolocation",
        });
        if (result) {
          result.onchange = () => {
            setPermissionStatus(result.state);
          };
        }
      } catch (error) {
        console.log(error);
      }
    };
    listenToPermissionChanged();
  });
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
