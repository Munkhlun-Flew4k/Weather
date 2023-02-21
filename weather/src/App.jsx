import React from "react";
import clear from "./pic/Clear.png";

function App() {
  // const buttonclick = () => {
  //   function (city) {
  //     fetch(
  //       `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=179b05419b91958ad1e8ec3db7966a94`
  //     )
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }
  // };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="flex justify-center items-center w-[414px] h-[800px] gap-[60px] flex-col bg-gradient-to-t from-green-400 to-blue-500 rounded-[50px]">
        <div className="flex flex-col items-center">
          <div className="w-[340px] h-auto flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="white"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <h1 className="font-Montserrat font-[400] text-[23px] text-white">
            Today,May 7th,2021
          </h1>
          <h1 className="font-Montserrat font-[700] text-[42px] text-white">
            Ulaanbaatar
          </h1>
        </div>

        <div className="w-[260px] h-[260px] bg-white rounded-full flex justify-center flex-col items-center bg-gradient-to-t from-pink-500 to-yellow-300">
          <img alt="" className="w-[90px] h-[90px]" src={clear} />
          <h1 className="font-Montserrat font-[300] text-[75px] mb-[20px]">
            100°C
          </h1>
        </div>
        <div className="gap-6 flex flex-col">
          <div className="flex flex-row w-[350px] h-auto justify-center gap-9">
            <div className="flex flex-col items-center w-[150px] h-auto">
              <h1 className="font-Montserrat font-[700] text-[25px] text-white">
                Wind status
              </h1>
              <h1 className="font-Montserrat font-[400] text-[30px] text-white">
                7mph
              </h1>
            </div>
            <div className="flex flex-col items-center w-[150px] h-auto">
              <h1 className="font-Montserrat font-[700] text-[25px] text-white">
                Visibility
              </h1>
              <h1 className="font-Montserrat font-[400] text-[30px] text-white">
                6.4 miles
              </h1>
            </div>
          </div>
          <div className="flex flex-row w-[350px] h-auto justify-center gap-9">
            <div className="flex flex-col items-center w-[150px] h-auto">
              <h1 className="font-Montserrat font-[700] text-[25px] text-white">
                Humidity
              </h1>
              <h1 className="font-Montserrat font-[400] text-[30px] text-white">
                69%
              </h1>
            </div>
            <div className="flex flex-col items-center w-[150px] h-auto">
              <h1 className="font-Montserrat font-[700] text-[25px] text-white">
                Air pressure
              </h1>
              <h1 className="font-Montserrat font-[400] text-[30px] text-white">
                998 mb
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
