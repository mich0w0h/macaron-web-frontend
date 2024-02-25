import React from "react";

export const ImageLoadContext = React.createContext({
  imageLoaded: false,
  setImageLoaded: (loaded: boolean) => {},
});
