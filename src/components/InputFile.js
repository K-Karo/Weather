import React, {useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerQuarter, faThermometerThreeQuarters, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {Container, Time, T, D, Div, PrimaryButton, Input, Button, Pname, Ptemp, Pdescription, Picon, Phumidity, PtempMax, 
  PtempMin, Forcast, TempHigh, TempLow, DailyForcast, Today, TempContainer, IconContainer, HumidityContainer, Temperature, 
  NameContainer, TodayContainer, OneDayAfter, TwoDaysAfter, ThreeDaysAfter, FourDaysAfter, FiveDaysAfter, SixDaysAfter,
  SevenDaysAfter, Text, Icon} from "./StyledComponents"

function DataFetching (
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
  daySeven, setDaySeven, monthSeven, setMonthSeven}) 
  {

  // useEffect(() => {
  //   var timer = setInterval(()=>setDate(new Date()), 1000 )
  //   return function cleanup() {
  //       clearInterval(timer)
  //   }
  // });

   const search = (e) => {   
      setCity(e.target.value)
   }

   const pass = (e) => {
    if (e.key === "Enter") {
     setInfo(true)}
   }

  const api = {
    key: "49f608cd91b591cfa7661d1144f2ecfe",
    url_1: "https://api.openweathermap.org/data/2.5/",
    url_2: "https://timezone.abstractapi.com/v1/current_time/?api_key=acd6ca4f5e284c208e218fe66583d399&location"
  }

  useEffect((e) => {
    if (info){
      const requestOne = axios.get(`${api.url_1}weather?q=${city}&units=metric&APPID=${api.key}`)
      axios.all([requestOne])
        .then(axios.spread((...responses) => { 
          const responseOne = responses[0];
          setWeather(responseOne.data)
          console.log(responseOne.data)
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
          console.log(responseOne.data)
          setLat(responseOne.data.coord.lat)
          setLon(responseOne.data.coord.lon)
        }))
          setDetailOne(false)
          setInfoGeography(true)
          setTimeout(() => {
            setInfo(true)
          }, 300);
    }
  }, [info])

  useEffect(() => {
    if (infoGeography){
      const requestOne = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${api.key}`)      
      axios.all([requestOne])
        .then(axios.spread((...responses) => { 
          const responseOne = responses[0];  
          setDailyForcast(responseOne.data)
          console.log(responseOne.data)
          setUnixTime(responseOne.data.daily[0].dt)
          setUnixTimeOne(responseOne.data.daily[1].dt)
          setUnixTimeTwo(responseOne.data.daily[2].dt)
          setUnixTimeThree(responseOne.data.daily[3].dt)
          setUnixTimeFour(responseOne.data.daily[4].dt)
          setUnixTimeFive(responseOne.data.daily[5].dt)
          setUnixTimeSix(responseOne.data.daily[6].dt)
          setUnixTimeSeven(responseOne.data.daily[7].dt)
        }))
          setInfoGeography(false)
          setTimeout(() => {
          setTime(true)
          }, 300);         
    }
  }, [infoGeography])

  useEffect (()=> {
    if (time) {
      setYear(new Date(unixTime * 1000).getFullYear())
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      setMonth(months[new Date(unixTime * 1000).getMonth()]);
      setMonthOne(months[new Date(unixTimeOne * 1000).getMonth()]);
      setMonthTwo(months[new Date(unixTimeTwo * 1000).getMonth()]);
      setMonthThree(months[new Date(unixTimeThree * 1000).getMonth()]);
      setMonthFour(months[new Date(unixTimeFour * 1000).getMonth()]);
      setMonthFive(months[new Date(unixTimeFive * 1000).getMonth()]);
      setMonthSix(months[new Date(unixTimeSix * 1000).getMonth()]);
      setMonthSeven(months[new Date(unixTimeSeven * 1000).getMonth()]);
      setDay(new Date(unixTime * 1000).getDate());
      setDayOne(new Date(unixTimeOne * 1000).getDate()); 
      setDayTwo(new Date(unixTimeTwo * 1000).getDate());
      setDayThree(new Date(unixTimeThree * 1000).getDate());
      setDayFour(new Date(unixTimeFour * 1000).getDate());
      setDayFive(new Date(unixTimeFive * 1000).getDate());
      setDaySix(new Date(unixTimeSix * 1000).getDate());
      setDaySeven(new Date(unixTimeSeven * 1000).getDate());     
    }
    setTime(false)
  })

  const displayHandler = () => {
    if (detailTwo) {
      return ( 
        <div>
         {/* <Time>
           <T> {date.toLocaleTimeString()}</T>
           <D> {date.toLocaleDateString()}</D>
         </Time> */}

         {/*<Container>
          <PrimaryButton onClick={() => {setInfo(true)}}>Search ...</PrimaryButton>
         </Container> */}
        </div>
      ) 
    } else {
      return ( 
        <div>
         {/* <Time>
           <T> {date.toLocaleTimeString()}</T>
           <D> {date.toLocaleDateString()}</D>
         </Time> */}

         <Container>
          <Input type="text" onChange={search} onKeyPress={pass}></Input>
          {/*<Button onClick={() => {setInfo(true)}}></Button>*/}
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
              <Picon><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img></Picon>
            </IconContainer>           
          </Forcast>    

          <DailyForcast>
           <OneDayAfter>
             <Text>{dayOne} {monthOne}</Text>
             <Icon><img src={`http://openweathermap.org/img/wn/${dailyForcast.daily[1].weather[0].icon}@2x.png`}></img></Icon>
           </OneDayAfter>
           <TwoDaysAfter>
             <Text>{dayTwo} {monthTwo}</Text>
             <Icon><img src={`http://openweathermap.org/img/wn/${dailyForcast.daily[2].weather[0].icon}@2x.png`}></img></Icon>
           </TwoDaysAfter>
           <ThreeDaysAfter>
             <Text>{dayThree} {monthThree}</Text>
             <Icon><img src={`http://openweathermap.org/img/wn/${dailyForcast.daily[3].weather[0].icon}@2x.png`}></img></Icon>
           </ThreeDaysAfter>
           <FourDaysAfter>
             <Text>{dayFour} {monthFour}</Text>
             <Icon><img src={`http://openweathermap.org/img/wn/${dailyForcast.daily[4].weather[0].icon}@2x.png`}></img></Icon>
           </FourDaysAfter>
           <FiveDaysAfter>
             <Text>{dayFive} {monthFive}</Text>
             <Icon><img src={`http://openweathermap.org/img/wn/${dailyForcast.daily[5].weather[0].icon}@2x.png`}></img></Icon>
           </FiveDaysAfter>
           <SixDaysAfter>
             <Text>{daySix} {monthSix}</Text>
             <Icon><img src={`http://openweathermap.org/img/wn/${dailyForcast.daily[6].weather[0].icon}@2x.png`}></img></Icon>
           </SixDaysAfter>
           <SevenDaysAfter>
             <Text>{daySeven} {monthSeven}</Text>
             <Icon><img src={`http://openweathermap.org/img/wn/${dailyForcast.daily[7].weather[0].icon}@2x.png`}></img></Icon>
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

export default DataFetching