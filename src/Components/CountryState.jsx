import { Option, Select } from "@material-tailwind/react";
import { Country, State } from "country-state-city";
import React, { useState } from "react";

const CountryState = ({ setAddressdata, addressdata }) => {
  const countryList = Country.getAllCountries();
  const [countrycode, setCountryCode] = useState();
  const [stateList, setStatelist] = useState(State.getStatesOfCountry("IN"));

  const changeHandler = (value) => {
    setCountryCode(value);
    setStatelist(State.getStatesOfCountry(value));
    setAddressdata({ ...addressdata, country: value });
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <Select
        label={
          <>
            Country/region <span className="text-red-400">*</span>
          </>
        }
        className="focus:shadow-lg font-semibold"
        color="green"
        size="lg"
        onChange={changeHandler}
        value={countrycode}>
        {countryList.length > 0 &&
          countryList.map((list, index) => (
            <Option
              key={index}
              value={list.isoCode}
              className="flex items-center gap-2">
              {list.name}
            </Option>
          ))}
      </Select>
      <Select
        label={
          <>
            State <span className="text-red-400">*</span>
          </>
        }
        onChange={(value) => setAddressdata({ ...addressdata, state: value })}
        className="focus:shadow-lg font-semibold"
        color="green"
        size="lg">
        {stateList &&
          stateList.map((list, index) => (
            <Option
              key={index}
              value={list?.name}
              className="flex items-center gap-2">
              {list?.name}
            </Option>
          ))}
      </Select>
    </div>
  );
};

export default CountryState;
