"use client"

import { FunctionComponent } from "react";
import { GoogleMap, LoadScriptNext, MarkerF } from "@react-google-maps/api";
import { CustomMapProps } from "@/types/nav";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "8px",
};

const apiKey: string | undefined = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

export const CustomMap: FunctionComponent<CustomMapProps> = ({lat = '', long = ''}) => {
  const center = {
    lat: +lat,
    lng: +long,
  }
  return (
    <LoadScriptNext googleMapsApiKey={`${apiKey}`} language="EN">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScriptNext>
  );
};
