import React, {useState} from 'react'
import InputFile from "./components/InputFile"

import './App.css';

function App() {
  const [city, setCity] = useState("Madrid");
  const [weather, setWeather] = useState({});
  const [time, setTime] = useState(false)
  const [info, setInfo] = useState(false);
  const [detailOne, setDetailOne] = useState(true);
  const [detailTwo, setDetailTwo] = useState(true);
  const [lat, setLat] = useState("40.4165");
  const [lon, setLon] = useState("-3.7026");
  const [infoGeography, setInfoGeography] = useState(false);
  const [dailyForcast, setDailyForcast] = useState(false);
  const [unixTime, setUnixTime] = useState("");  
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [unixTimeOne, setUnixTimeOne] = useState("");  
  const [dayOne, setDayOne] = useState("");
  const [monthOne, setMonthOne] = useState("");
  const [unixTimeTwo, setUnixTimeTwo] = useState("");  
  const [dayTwo, setDayTwo] = useState("");
  const [monthTwo, setMonthTwo] = useState("");
  const [unixTimeThree, setUnixTimeThree] = useState("");  
  const [dayThree, setDayThree] = useState("");
  const [monthThree, setMonthThree] = useState("");
  const [unixTimeFour, setUnixTimeFour] = useState("");  
  const [dayFour, setDayFour] = useState("");
  const [monthFour, setMonthFour] = useState("");
  const [unixTimeFive, setUnixTimeFive] = useState("");  
  const [dayFive, setDayFive] = useState("");
  const [monthFive, setMonthFive] = useState("");
  const [unixTimeSix, setUnixTimeSix] = useState("");  
  const [daySix, setDaySix] = useState("");
  const [monthSix, setMonthSix] = useState("");
  const [unixTimeSeven, setUnixTimeSeven] = useState("");  
  const [daySeven, setDaySeven] = useState("");
  const [monthSeven, setMonthSeven] = useState("");
  var [date,setDate] = useState(new Date());

  return (
    <div className="App">
      <InputFile
        city={city} setCity={setCity}
        weather={weather} setWeather={setWeather}
        time={time} setTime={setTime}
        date={date} setDate={setDate}
        info={info} setInfo={setInfo}
        detailOne={detailOne} setDetailOne={setDetailOne}
        detailTwo={detailTwo} setDetailTwo={setDetailTwo}
        lat={lat} setLat={setLat}
        lon={lon} setLon={setLon}
        infoGeography={infoGeography} setInfoGeography={setInfoGeography}
        dailyForcast={dailyForcast} setDailyForcast={setDailyForcast}
        unixTime={unixTime} setUnixTime={setUnixTime}
        year={year} setYear={setYear}
        month={month} setMonth={setMonth}
        day={day} setDay={setDay}
        unixTimeOne={unixTimeOne} setUnixTimeOne={setUnixTimeOne}
        dayOne={dayOne} setDayOne={setDayOne}
        monthOne={monthOne} setMonthOne={setMonthOne}
        unixTimeTwo={unixTimeTwo} setUnixTimeTwo={setUnixTimeTwo}
        dayTwo={dayTwo} setDayTwo={setDayTwo}
        monthTwo={monthTwo} setMonthTwo={setMonthTwo}
        unixTimeThree={unixTimeThree} setUnixTimeThree={setUnixTimeThree}
        dayThree={dayThree} setDayThree={setDayThree}
        monthThree={monthThree} setMonthThree={setMonthThree}
        unixTimeFour={unixTimeFour} setUnixTimeFour={setUnixTimeFour}  
        dayFour={dayFour} setDayFour={setDayFour}
        monthFour={monthFour} setMonthFour={setMonthFour}
        unixTimeFive={unixTimeFive} setUnixTimeFive={setUnixTimeFive} 
        dayFive={dayFive} setDayFive={setDayFive}
        monthFive={monthFive} setMonthFive={setMonthFive}
        unixTimeSix={unixTimeSix} setUnixTimeSix={setUnixTimeSix}  
        daySix={daySix} setDaySix={setDaySix}
        monthSix={monthSix} setMonthSix={setMonthSix}
        unixTimeSeven={unixTimeSeven} setUnixTimeSeven={setUnixTimeSeven}  
        daySeven={daySeven} setDaySeven={setDaySeven}
        monthSeven={monthSeven} setMonthSeven={setMonthSeven}>
      </InputFile>
    </div>
  );
}

export default App;
