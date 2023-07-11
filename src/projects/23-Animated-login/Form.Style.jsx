import styled, { keyframes } from 'styled-components'
import BgcImage from '../08-slide-to-unlock/img/home.jpg'

export const LoginContainer = styled.div`

margin: auto;
display: flex;
flex-direction: column;
`

const animateLogo = keyframes`
 0%{
    border-radius: 0 0 0 0;
    transform: rotate(0deg);
 }
 25%{
    border-radius:25%;
    transform: rotate(45deg);
 }
 50%{
    border-radius: 25%;
    transform: rotate(90deg);
 }
 75%{
    border-radius:75%;
    transform: rotate(180deg);
 }
 100%{
    transform: scale(0);
 }
`

export const FormAnimation = styled.div`
width:250px;
height:250px;
background:URL(${BgcImage}) center/cover ;
margin: 0 auto;
text-align: center;
display: flex;
flex-direction: column;
margin-top: 25px;
border: 10px solid ${(props) => props.borderColor || '#333'};
border - radius: 5px;
box - shadow: 15px 15px 15px rgba(0, 0, 0, 0.2);
&.animate{
    animation: ${animateLogo} 1s linear;
    transform: rotate(180deg);
    border - radius: 50 %;
    transform: scale(0);
    transition: 1s linear;
}
`