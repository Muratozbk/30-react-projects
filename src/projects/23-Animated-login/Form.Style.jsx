import styled from 'styled-components'
import BgcImage from '../08-slide-to-unlock/img/home.jpg'

export const LoginContainer = styled.div`

margin: auto;
display: flex;
flex-direction: column;
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
border: 10px solid #333;
border-radius: 5px;
box-shadow: 15px 15px 15px rgba(0,0,0,0.2);
`