import { useState, useEffect } from "react";
import { getPhotos } from "@/sanity/sanity-utils";
import { Photo } from "@/types/photo";

export function usePhotos() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    async function fetchPhotos() {
      const photosData = await getPhotos();
      console.log("Fetched photos data:", photosData);
      setPhotos(photosData);
    }

    fetchPhotos();
  }, []);

  return photos;
}
