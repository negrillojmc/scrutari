import { useEffect, useState } from "react";

export function useHeadsObserver() {
  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        console.log(entry)
      });
    };

  }, []);
}
