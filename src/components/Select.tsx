import { useEffect, useState } from "react";

import axios from "axios";

import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface Props {
  value: string;
  setValue: (val: string) => void;
}

interface countryProps {
  name: {
    common: string;
  };
  cca3: string;
  flags: {
    svg: string;
  };
}

export default function SelectComponent({ value, setValue }: Props) {
  const [countries, setCountries] = useState<countryProps[]>([]);

  const url = "https://restcountries.com/v3.1/all";

  const fetchData = async () => {
    const dataCountries = await axios.get(url);

    setCountries(dataCountries.data);
  };

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="flex items-center rounded-lg focus-within:outline focus-within:outline-[1.5px] focus-within:outline-purple bg-black-700 ">
      <input
        type="text"
        placeholder="$ 1.000"
        className="px-4 py-4 rounded-l-lg border-none focus:outline-none bg-black-700 text-gray-300 "
      />
      <div className="w-px h-8 bg-gray-400"></div>
      <div>
        <Select.Root value={value} onValueChange={setValue}>
          <Select.Trigger className="bg-black-700 text-white inline-flex items-center justify-center gap-2 px-4 py-4 rounded-r-lg">
            <Select.Value />
            <Select.Icon className="">
              <ChevronDownIcon height={20} width={20} className="font-bold" />
            </Select.Icon>
          </Select.Trigger>

          <Select.Content>
            <Select.Viewport className="bg-black-700 px-4 py-3 text-white rounded-md">
              <Select.Group className="flex flex-col gap-4 ">
                {countries.map((country, index) => (
                  <Select.Item value={country.cca3} key={index}>
                    <Select.ItemText>
                      <div className="flex gap-3 hover:bg-gray-400 cursor-default rounded-md pl-2 py-2">
                        <img
                          src={country.flags.svg}
                          alt="Image flag country"
                          width={25}
                          height={25}
                        />
                        {country.name.common}
                      </div>
                    </Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
}
