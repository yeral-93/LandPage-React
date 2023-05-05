import styled from "styled-components";
import HombreMobile from "../../img/mobile/image-interactive.jpg"


export const StylesBanner = styled.div`
padding: 70px 85px 0px 85px;
margin-bottom:-257px ;

@media screen and (max-width: 375px) {
 margin:0 ;
 width: 100%;
 padding:5px 0px 0px 80px ;
 margin-bottom:60px ;
       }
`
export const BannerImage = styled.figure`
padding: 10px 30px 5px 30px;

img {

    @media screen and (max-width: 375px) {
background:url(${HombreMobile}) ;
  width:350px;
  padding:0 ;
  margin-left:-100px ;
  background-color:red ;
}
 
}
`
  
export const Informacion = styled.div`
height:400px;
width:50% ;background-color: white;
position: relative;
top: -335px;
left: 560px;
padding: 80px 30px 0px 80px; 

@media screen and (max-width: 375px) {
   width:342px ;
   height:170px ;
 top:19px ;
 left:-63px ;
   margin:0 ;
   padding:10px 50px 10px 50px ;
   text-align:center ;
   display:block ;


  }
`
export const H1 = styled.h1` 
font-size:50px;
margin-top:20px ;
left:40px;
margin-bottom: 30px;

@media screen and (max-width: 375px) {
    margin-bottom:10px ;
    font-size: 20px;}
`
export const Span = styled.span`
font-size:18px;
top: 100px;
@media screen and (max-width: 375px) {
font-size: 14px;}
`





