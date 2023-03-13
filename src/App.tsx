import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import SelectComponent from "./components/Select";

import Converter from "./assets/Converter.svg";

import axios from "axios";

const data = [
  ["Days", "Value"],
  ["1D", 10.0],
  ["5D", 5.3],
  ["1M", 7.5],
  ["5A", 6.4],
  ["Máx", 11.4],
];

const options = {
  title: "Taxa de câmbio",
  titleTextStyle: {
    color: "#8257E5",
    fontSize: 15,
  },
  hAxis: {
    title: "Days",
    titleTextStyle: { color: "#8257E5" },
    textStyle: { color: "#8257E5" },
  },
  vAxis: {
    minValue: 0,
    textStyle: { color: "#8257E5" },
    gridlines: { color: "#555757" },
  },
  legend: {
    textStyle: { color: "#8257E5" },
  },
  chartArea: { width: "70%", height: "80%" },
  backgroundColor: "#0A0A0B",
  colors: ["#8257E5"],
};

export default function App() {
  const [selectFirstCountry, setSelectFirstCountry] = useState("");
  const [selectSecondCountry, setSelectSecondCountry] = useState("");

  return (
    <div className="w-screen h-screen bg-black-900 flex justify-center items-center">
      <div className="max-w-[70rem] px-20 py-16 flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl leading-6 text-white font-semibold ">
            Conversor de moedas
          </h1>
          <div className="flex gap-4 ">
            <SelectComponent
              value={selectFirstCountry}
              setValue={setSelectFirstCountry}
            />
            <img src={Converter} alt="Image converter" />
            <SelectComponent
              value={selectSecondCountry}
              setValue={setSelectSecondCountry}
            />
          </div>
        </div>
        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}
