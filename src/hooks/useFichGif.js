import { useEffect, useState } from "react";
import { Getgif } from "../components/helpers/getgif";

export const useFichGif = (category) => {
  const [State, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {

    Getgif(category)
        .then((imgs) => {
            setTimeout(() => {
            
                setState(
                {
                    data: imgs,
                    loading: false,
                },
                3000
                );

            });

            });

  }, [category]);

  return State;
};
