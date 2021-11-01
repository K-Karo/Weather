import React, {useEffect} from 'react'
import axios from 'axios'
import { BsSearch } from "react-icons/bs"
import {AiOutlineHome} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerQuarter, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import {MainMenuBtn, TodoGitBtn, Container, Input, Pname, Ptemp, Pdescription, Picon, Phumidity, PtempMax, 
  PtempMin, Forcast, TempHigh, TempLow, DailyForcast, Today, TempContainer, IconContainer, 
  HumidityContainer, Temperature, NameContainer, TodayContainer, OneDayAfter, TwoDaysAfter, 
  ThreeDaysAfter, FourDaysAfter, FiveDaysAfter, SixDaysAfter,SevenDaysAfter, Text, Icon,
  DailyTemp, InputButton} from "./StyledComponents"

function Display (
  {city, setCity, weather, setWeather, time, setTime, date, setDate, 
  info, setInfo, detailOne, setDetailOne, detailTwo, setDetailTwo,
  lat, setLat, lon, setLon, infoGeography, setInfoGeography,
  dailyForcast, setDailyForcast,unixTime, setUnixTime, day, setDay,
  month, setMonth, year, setYear, unixTimeOne, setUnixTimeOne, dayOne, setDayOne,
  monthOne, setMonthOne, unixTimeTwo, setUnixTimeTwo, dayTwo, setDayTwo,
  monthTwo, setMonthTwo, unixTimeThree, setUnixTimeThree, dayThree, setDayThree,
  monthThree, setMonthThree, unixTimeFour, setUnixTimeFour,
  dayFour, setDayFour, monthFour, setMonthFour, unixTimeFive, setUnixTimeFive,
  dayFive, setDayFive, monthFive, setMonthFive, unixTimeSix, setUnixTimeSix,
  daySix, setDaySix, monthSix, setMonthSix, unixTimeSeven, setUnixTimeSeven,
  daySeven, setDaySeven, monthSeven, setMonthSeven, weatherActivator, setWeatherActivator}) 
  {

   const search = (e) => {   
      setCity(e.target.value)
   }

   const pass = (e) => {
    if (e.key === "Enter") {
     setInfo(true)}
   }

   const passClick = () => {
     setInfo(true)
   }

  const api = {
    key: "49f608cd91b591cfa7661d1144f2ecfe",
    url_1: "https://api.openweathermap.org/data/2.5/",
    url_2: "http://openweathermap.org/img/wn/"
  }

  useEffect(() => {
    if (info){
      const requestOne = axios.get(`${api.url_1}weather?q=${city}&units=metric&APPID=${api.key}`)
      axios.all([requestOne])
        .then(axios.spread((...responses) => { 
          const responseOne = responses[0];
          setWeather(responseOne.data)
          setLat(responseOne.data.coord.lat)
          setLon(responseOne.data.coord.lon)
        }))
          setInfo(false)
          setDetailTwo(false)
          setTimeout(() => {
          setInfoGeography(true)
          }, 300);
          
    } else if (detailOne) {
      const requestOne = axios.get(`${api.url_1}weather?q=Madrid&units=metric&APPID=${api.key}`)
      axios.all([requestOne])
        .then(axios.spread((...responses) => { 
          const responseOne = responses[0];
          setWeather(responseOne.data)
          setLat(responseOne.data.coord.lat)
          setLon(responseOne.data.coord.lon)
        }))
          setDetailOne(false)
          setInfoGeography(true)
          setTimeout(() => {
            setDetailTwo(false)
          }, 300);
    }
  })

  useEffect(() => {
    if (infoGeography){
      const requestOne = axios.get(`${api.url_1}onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${api.key}`)      
      axios.all([requestOne])
        .then(axios.spread((...responses) => { 
          const responseOne = responses[0];  
          setDailyForcast(responseOne.data)
          console.log(responseOne.data)
          setUnixTime(responseOne.data.daily[0])
          setUnixTimeOne(responseOne.data.daily[1])
          setUnixTimeTwo(responseOne.data.daily[2])
          setUnixTimeThree(responseOne.data.daily[3])
          setUnixTimeFour(responseOne.data.daily[4])
          setUnixTimeFive(responseOne.data.daily[5])
          setUnixTimeSix(responseOne.data.daily[6])
          setUnixTimeSeven(responseOne.data.daily[7])
        }))
          setInfoGeography(false)
          setTimeout(() => {
          setTime(true)
          }, 700);     
    }
  })

  useEffect (()=> {
    if (time) {   
      setYear(new Date(unixTime.dt * 1000).getFullYear())
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      setMonth(months[new Date(unixTime.dt * 1000).getMonth()]);
      setMonthOne(months[new Date(unixTimeOne.dt * 1000).getMonth()]);
      setMonthTwo(months[new Date(unixTimeTwo.dt * 1000).getMonth()]);
      setMonthThree(months[new Date(unixTimeThree.dt * 1000).getMonth()]);
      setMonthFour(months[new Date(unixTimeFour.dt * 1000).getMonth()]);
      setMonthFive(months[new Date(unixTimeFive.dt * 1000).getMonth()]);
      setMonthSix(months[new Date(unixTimeSix.dt * 1000).getMonth()]);
      setMonthSeven(months[new Date(unixTimeSeven.dt * 1000).getMonth()]);
      setDay(new Date(unixTime.dt * 1000).getDate());
      setDayOne(new Date(unixTimeOne.dt * 1000).getDate()); 
      setDayTwo(new Date(unixTimeTwo.dt * 1000).getDate());
      setDayThree(new Date(unixTimeThree.dt * 1000).getDate());
      setDayFour(new Date(unixTimeFour.dt * 1000).getDate());
      setDayFive(new Date(unixTimeFive.dt * 1000).getDate());
      setDaySix(new Date(unixTimeSix.dt * 1000).getDate());
      setDaySeven(new Date(unixTimeSeven.dt * 1000).getDate());    
    }
    setTime(false)
  })

  function refreshPage() {
    window.location.reload();
  }

  const displayHandler = () => {
    if (detailTwo === false) {
      return ( 
        <div>
         <MainMenuBtn onClick={ refreshPage }><AiOutlineHome Icon size={30}></AiOutlineHome></MainMenuBtn>
         <form action="https://github.com/K-Karo/Todo">
               <TodoGitBtn type="submit"><AiFillGithub Icon size={30}></AiFillGithub></TodoGitBtn>
         </form>
         <Container>
          <Input type="text" onChange={search} onKeyPress={pass}></Input>
          <InputButton onClick={passClick}><BsSearch Icon size={30}></BsSearch></InputButton>
          <Forcast>

            <NameContainer>
              <Pname>{weather.name}, {weather.sys.country}</Pname>
            </NameContainer>

            <TodayContainer>
              <Today>{year} {month} {day}</Today>
            </TodayContainer>
            
            <Temperature>
              <Ptemp>{weather.main.temp}°C</Ptemp>
            </Temperature>

            <HumidityContainer>
              <Phumidity>humidity: {weather.main.humidity}%</Phumidity>
            </HumidityContainer>
            <TempHigh><FontAwesomeIcon icon={faThermometerThreeQuarters} size='1x'></FontAwesomeIcon></TempHigh>
            <TempContainer>
              <PtempMax>               
                {weather.main.temp_max}°C / {weather.main.temp_min}°C     
              </PtempMax>
            </TempContainer>
            <TempLow><FontAwesomeIcon icon={faThermometerQuarter} size='1x' color="blue"></FontAwesomeIcon></TempLow>
            <IconContainer>
              <Pdescription>{weather.weather[0].description} </Pdescription>
              <Picon><img src={`${api.url_2}${weather.weather[0].icon}@2x.png`}></img></Picon>
            </IconContainer>           
          </Forcast>    
        
          <DailyForcast>
           <OneDayAfter>
             <Text>{dayOne} {monthOne}</Text>
             <DailyTemp> {(unixTimeOne.temp.max-273.15).toFixed(2)}°C / {(unixTimeOne.temp.min-273.15).toFixed(2)}°C </DailyTemp>
             <Icon><img src={`${api.url_2}${dailyForcast.daily[1].weather[0].icon}@2x.png`}></img></Icon>
           </OneDayAfter>
           <TwoDaysAfter>
             <Text>{dayTwo} {monthTwo}</Text>
             <DailyTemp> {(unixTimeTwo.temp.max-273.15).toFixed(2)}°C / {(unixTimeTwo.temp.min-273.15).toFixed(2)}°C </DailyTemp>
             <Icon><img src={`${api.url_2}${dailyForcast.daily[2].weather[0].icon}@2x.png`}></img></Icon>
           </TwoDaysAfter>
           <ThreeDaysAfter>
             <Text>{dayThree} {monthThree}</Text>
             <DailyTemp> {(unixTimeThree.temp.max-273.15).toFixed(2)}°C / {(unixTimeThree.temp.min-273.15).toFixed(2)}°C </DailyTemp>
             <Icon><img src={`${api.url_2}${dailyForcast.daily[3].weather[0].icon}@2x.png`}></img></Icon>
           </ThreeDaysAfter>
           <FourDaysAfter>
             <Text>{dayFour} {monthFour}</Text>
             <DailyTemp> {(unixTimeFour.temp.max-273.15).toFixed(2)}°C / {(unixTimeFour.temp.min-273.15).toFixed(2)}°C </DailyTemp>
             <Icon><img src={`${api.url_2}${dailyForcast.daily[4].weather[0].icon}@2x.png`}></img></Icon>
           </FourDaysAfter>
           <FiveDaysAfter>
             <Text>{dayFive} {monthFive}</Text>
             <DailyTemp> {(unixTimeFive.temp.max-273.15).toFixed(2)}°C / {(unixTimeFive.temp.min-273.15).toFixed(2)}°C </DailyTemp>
             <Icon><img src={`${api.url_2}${dailyForcast.daily[5].weather[0].icon}@2x.png`}></img></Icon>
           </FiveDaysAfter>
           <SixDaysAfter>
             <Text>{daySix} {monthSix}</Text>
             <DailyTemp> {(unixTimeSix.temp.max-273.15).toFixed(2)}°C / {(unixTimeSix.temp.min-273.15).toFixed(2)}°C </DailyTemp>
             <Icon><img src={`${api.url_2}${dailyForcast.daily[6].weather[0].icon}@2x.png`}></img></Icon>
           </SixDaysAfter>
           <SevenDaysAfter>
             <Text>{daySeven} {monthSeven}</Text>
             <DailyTemp> {(unixTimeSeven.temp.max-273.15).toFixed(2)}°C / {(unixTimeSeven.temp.min-273.15).toFixed(2)}°C </DailyTemp>
             <Icon><img src={`${api.url_2}${dailyForcast.daily[7].weather[0].icon}@2x.png`}></img></Icon>
           </SevenDaysAfter>
         </DailyForcast>  

         </Container>
        </div>
      ) 
    }    
  }

  return (
    <div>
        {displayHandler()}                
    </div>     
  );
}

export default Display
