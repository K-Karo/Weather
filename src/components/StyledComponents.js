import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    height: 780px;
    width: 50%;
    border: 1px solid #ccc;
    top: 10px;
    left: 25%;
    background-color: DarkBlue;
    background-image: linear-gradient(LightCyan, PowderBlue);
    border-radius: 0px 0px 0px 0px;
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
    height: 50px;
    left: 20%;
    width: 60%;
    border: 2px solid gray;
    text-align: 40px;
    padding: 0px 20px;
    border-radius: 20px;
    font-size: 20px;
    outline : none;
    color: MidnightBlue;
    &:focus {
        border: 3px solid DarkOrange;
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
    top: 10px;
    font-size: 17px;
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
    top: 10px;
    font-size: 17px;
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
`
export const PtempMin = styled.div`
    position: absolute;
    top: 15px;
    font-size: 17px;
    font-weight: bold;
    right: 25px;
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
    left: 120px;
`
