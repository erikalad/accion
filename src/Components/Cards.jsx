import React from "react"
import img1 from './../imagenes/img1.jpg'
import img2 from './../imagenes/img2.jpg'
import img3 from './../imagenes/img3.jpg'
import './Cards.css'
import { BiCommentDetail } from 'react-icons/bi';
import { Button, Card } from 'antd';
const { Meta } = Card;

export default function Cards(){
    return(
<div className="artis" id="cartas">

  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={img1} className="img-carta"/>}
	className="carta"
  >
    <Meta title="Plan de Escucha Vecinal" description="👉Qué propones para mejorar la salud municipal?" /><Button className="boton" href='https://www.facebook.com/photo/?fbid=125603043815605&set=a.116619721380604'>Opinar</Button>
  </Card>


  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={img2} className="img-carta"/>}
	className="carta"
  >
    <Meta title="Plan de Escucha Vecinal" description="👉Qué ideas tenés para controlar el problema de los microbasurales?" /><Button className="boton" href='https://www.facebook.com/photo?fbid=121295144246395&set=a.116619721380604'>Opinar</Button>
  </Card>


  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={img3}  className="img-carta"/>}
	className="carta"
  >
    <Meta title="Plan de Escucha Vecinal" description="👉¿Vos qué problemáticas priorizás en materia de seguridad?" /><Button className="boton" href='https://www.facebook.com/photo?fbid=116619698047273&set=a.116619721380604'>Opinar</Button>
  </Card>


</div>   
        
    )
}
               
