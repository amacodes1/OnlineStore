"use client";

import React from "react";
import { Audio } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Audio
        height="80"
        width="80"
        color="green"
        ariaLabel="loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
