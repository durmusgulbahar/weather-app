"use client";
import React from "react";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import SearchBox from "./SearchBox";


export default function Navbar() {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white ">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="font-medium text-5xl flex gap-4">
          <h1 className="text-gray-500">Weather</h1>
          <TiWeatherWindyCloudy className="text-blue-500 mt-1" />
        </div>
        <section className="flex gap-4 items-center">
          <CiLocationOn className="text-2xl hover:opacity-80 cursor-pointer" />
          <p>Antalya</p>
          <div>
            {/** callback functions to get weather data from OpenWeatherAPI according to value */}
            <SearchBox onChange={handleChange} onSubmit={handleSubmit} value=""/>
          </div>
        </section>
      </div>
    </nav>
  );
}
