import { styled } from "styled-components";
import { AppColors } from "../styles/colors";

export const EventMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 12px;
    gap: 1.5vw;
    justify-content: center;
`

export const EventDateDiv = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: ${AppColors.base.White}aa;
    border-radius: 8px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    padding: 1vh 4vw;
    box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.3); 
`

export const EventInfoDiv = styled.div`
    display: flex;
    flex-direction: column;  
    border-radius:  8px;
    background-color: ${AppColors.base.White}bb;
    padding: 1vh 4vw;
    min-width: 60%;
    max-width: 60%;
    box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.2);
`

export const EventDateDayText = styled.h2`
    font-size: 2em;
    color: ${AppColors.base.PrimaryGreen};
    font-weight: 600;
`

export const EventDateMonthText = styled.h2`
    font-size: 1.3em;
    color: ${AppColors.base.PrimaryGreen};
    font-weight: 400;
`

export const EventNameText = styled.h2`
    font-size: 1.3em;
    color: ${AppColors.base.SecondaryGreen};
    font-weight: 400;
    padding-bottom: 1vh;
`

export const EventDescriptionText = styled.h2`
    font-size: 0.80em;
    font-weight: 300;
`