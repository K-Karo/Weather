import styled from "styled-components"

export const MainMenuBtn = styled.button`
 position: absolute;
 top: 2px;
 height: 46px;
 right: 2%;
 width: 10%;
 border: none;
 border-radius: 10px;
 color: aliceblue;
 background-color: DarkSlateBlue;
 &:hover {
  background: white;
  border: 3px solid DarkSlateBlue;
  color: DarkSlateBlue;
}
&:active {     
  background: white;
  border: 3px solid LightSteelBlue;
  color: LightSteelBlue;    
}
@media screen and (max-width: 499px) {
  right: 1%;
  width: 15%;
}
`
export const TodoGitBtn = styled.button`
 position: absolute;
 top: 2px;
 height: 46px;
 left: 2%;
 width: 10%;
 border: none;
 border-radius: 10px;
 color: aliceblue;
 background-color: DarkSlateBlue;
 &:hover {
  background: white;
  border: 3px solid DarkSlateBlue;
  color: DarkSlateBlue;
}
&:active {     
  background: white;
  border: 3px solid LightSteelBlue;
  color: LightSteelBlue;    
}
@media screen and (max-width: 499px) {
  left: 1%;
  width: 15%;
}
`
export const Container = styled.div`
    position: absolute;
    height: 780px;
    width: 50%;
    border: 3px solid DarkOrange;
    border-radius: 40px;
    top: 50px;
    left: 25%;
    background-color: DarkBlue;
    background-image: linear-gradient(LightCyan, PowderBlue);
    @media screen and (max-width: 1400px) {
      left: 20%;
      width: 60%;
    }
    @media screen and (max-width: 1200px) {
      left: 15%;
      width: 70%;
    }
    @media screen and (max-width: 1000px) {
      left: 5%;
      width: 90%;
    }
    @media screen and (max-width: 900px) {
      top: 50px;
      height: 1300px;
      left: 10%;
      width: 80%;
    }
    @media screen and (max-width: 499px) {
      top: 70px;
      height: 1300px;
      left: 3%;
      width: 94%;
    }
`
export const Forcast = styled.div`
    position: absolute;
    height: 400px;
    width: 40%;
    top: 50%;
    left: 5%;
    background-color: transparent;
    text-align: center;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    @media screen and (max-width: 900px) {
      top: 27%;
      left: 5%;
      width: 90%;
    }
`
export const Information = styled.div`
    position: absolute;
    height: 350px;
    width: 50%;
    border: 1px solid #ccc;
    top: 200px;
    left: 25%;
    background-color: white;
`
export const Input = styled.input`
    position: absolute;
    top: 10px;
    height: 51px;
    left: 20%;
    width: 50%;
    border: 1px solid gray;
    text-align: center;
    border-radius: 20px 0px 0px 20px;
    font-size: 20px;
    outline : none;
    color: MidnightBlue;
    &:focus {
        border: 1px solid DarkOrange;
    }
    @media screen and (max-width: 900px) {
      left: 5%;
      width: 70%;
    }
`
export const InputButton = styled.button`
    position: absolute;
    top: 10px;
    height: 55px;
    right: 20%;
    width: 10%;
    border: 1px solid gray;
    text-align: center;
    border-radius: 0px 20px 20px 0px;
    font-size: 20px;
    outline : none;
    background-color: DarkOrange;
    color: white;
    &:hover {
      background: white;
      border: 1px solid DarkOrange;
      color: DarkOrange;
    }
    &:active {     
      background: white;
      border: 1px solid LightSteelBlue;
      color: LightSteelBlue;    
    }
    @media screen and (max-width: 900px) {
      right: 5%;
      width: 20%;
    }
`
export const NameContainer = styled.div`
    position: absolute;
    top: 10px;
    height: 50px;
    width: 100%;
    background-color: transparent;
`
export const Pname = styled.div`
    position: relative;
    top: -50px;
    font-size: 40px;
    font-weight: bold;
    align-items: center;
`
export const TodayContainer = styled.div`
    position: absolute;
    top: 70px;
    height: 50px;
    width: 100%;
    background-color: transparent;
`
export const Today = styled.div`
    position: relative;
    top: 0px;
    font-size: 25px;
    font-weight: bold;
    align-items: center;
`
export const Temperature = styled.div`
    position: absolute;
    top: 130px;
    height: 50px;
    width: 100%;
    background-color: transparent;
`
export const Ptemp = styled.div`
    position: relative;
    top: 10px;
    font-size: 17px;
    font-weight: bold;
    align-items: center;
    @media screen and (max-width: 389px) {
      font-size: 12px;
    }
`
export const HumidityContainer = styled.div`
    position: absolute;
    top: 190px;
    height: 50px;
    width: 100%;
    background-color: transparent;
`
export const Phumidity = styled.div`
    position: relative;
    top: 10px;
    font-size: 17px;
    font-weight: bold;
    align-items: center;
    @media screen and (max-width: 389px) {
      font-size: 12px;
    }
`
export const TempContainer = styled.div`
    position: absolute;
    top: 250px;
    height: 50px;
    width: 50%;
    right: 25%;
    background-color:transparent;
`
export const PtempMax = styled.div`
    position: relative;
    top: 15px;
    font-size: 17px;
    font-weight: bold;
    align-items: center;
    @media screen and (max-width: 389px) {
      font-size: 12px;
    }
`
export const PtempMin = styled.div`
    position: absolute;
    top: 15px;
    font-size: 17px;
    font-weight: bold;
    right: 25px;
    @media screen and (max-width: 389px) {
      font-size: 12px;
    }
`
export const TempHigh = styled.div`
    position: absolute;
    top: 260px;
    height: 30px;
    width: 10%;
    left: 15%;
    background-color:transparent;
    color: red;
`
export const TempLow = styled.div`
    position: absolute;
    top: 260px;
    height: 30px;
    width: 10%;
    right: 15%;
    background-color:transparent;
    color: blue;
`
export const IconContainer = styled.div`
    position: absolute;
    top: 310px;
    height: 100px;
    width: 100%;
    background-color: transparent;
`
export const Pdescription = styled.div`
    position: absolute;
    top: 35px;
    left: 20px;
    font-size: 17px;
    font-weight: bold;
    @media screen and (max-width: 389px) {
      font-size: 12px;
    }
`
export const Picon = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 50%;
    background-color: transparent;
`
export const DailyForcast = styled.div`
    position: absolute;
    height: 710px;
    width: 49%;
    border: none;
    top: 80px;
    right: 1%;
    background-color: transparent;
    text-align: center;
    @media screen and (max-width: 900px) {
      top: 600px;
      left: 5%;
      width: 90%;
    }
`
export const OneDayAfter = styled.div`
    position: relative;
    top: 10px;
    height: 100px;
    width: 100%;
    background-color: transparent;
`
export const TwoDaysAfter = styled.div`
    position: relative;
    top: 10px;
    height: 100px;
    width: 100%;
    background-color: transparent;
`
export const ThreeDaysAfter = styled.div`
    position: relative;
    top: 10px;
    height: 100px;
    width: 100%;
    background-color: transparent;
`
export const FourDaysAfter = styled.div`
    position: relative;
    top: 10px;
    height: 100px;
    width: 100%;
    background-color: transparent;
`
export const FiveDaysAfter = styled.div`
    position: relative;
    top: 10px;
    height: 100px;
    width: 100%;
    background-color: transparent;
`
export const SixDaysAfter = styled.div`
    position: relative;
    top: 10px;
    height: 100px;
    width: 100%;
    background-color: transparent;
`
export const SevenDaysAfter = styled.div`
    position: relative;
    top: 10px;
    height: 100px;
    width: 100%;
    background-color: transparent;
`
export const Text = styled.div`
    position: absolute;
    top: 35px;
    left: 20px;
    font-size: 17px;
    font-weight: bold;
    @media screen and (max-width: 389px) {
      font-size: 14px;
    }
`
export const Icon = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 50%;
    background-color: transparent;
`
export const DailyTemp = styled.div`
    position: absolute;
    top: 40px;
    font-size: 12px;
    font-weight: bold;
    left: 30%;
    @media screen and (max-width: 389px) {
      font-size: 9px;
    }
`
