"use client";
import { useQuery } from "@tanstack/react-query";

import { WeatherForecastResponse } from "@/models/WeatherData";
import { convertKelvinToCelcius } from "@/utils/convertKelvinToCelcius";
import Container from "@/components/Container";
export default function Home() {
  const { data, isLoading, isError } = useQuery<WeatherForecastResponse>({
    queryKey: ["weather"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:3000/api/getWeatherData?city=antalya"
      );
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center min-h-screen justify-center">
        <p className="animate-bounce">Loading...</p>
      </div>
    );
  }

  const today = data?.list[0];
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/*today*/}
        <section>
          <div>
            <h2 className="flex gap-1 text-2xl items-end">
              <p>Today</p>
              <p className="text-lg">({today?.dt_txt})</p>
            </h2>
            <Container>
              <div className="flex flex-col p-3 justify-center border-solid">
                <span className="text-lg font-bold">
                  {convertKelvinToCelcius(today?.main.temp)}°C
                </span>
                <p className="text-xs space-x-1 whitespace-nowrap">
                  <span>Feels like</span>
                  {today?.main.feels_like}
                </p>
              </div>
            </Container>
          </div>
        </section>
        {/*5 days*/}
        <section></section>
      </main>
    </div>
  );
}
