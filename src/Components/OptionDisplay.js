import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
  let currentPotentials = useSelector(selectPotentials);
  console.log(currentPotentials);

  const dispatch = useDispatch();
  return (
    <div className="stack">
      {currentPotentials.map((event, index) => {
        return (
          <h2
            key={event.name.official}
            className="country-option"
            onClick={() => {
              dispatch(setDisplayCountry(currentPotentials[index]));
            }}
          >
            {event.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
