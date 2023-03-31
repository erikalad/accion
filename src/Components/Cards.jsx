import React from "react"
import img1 from './../imagenes/img1.jpg'
import img2 from './../imagenes/img2.jpg'
import img3 from './../imagenes/img3.jpg'
import './Cards.css'
import { BiCommentDetail } from 'react-icons/bi';

export default function Cards(){
    return(
        <div className="artis">
                  
<body>
	<div class="wrap">
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card1">
                <img src={img1} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5>Plan de Escucha Vecinal</h5>
					<p>👉Qué propones para mejorar la salud municipal?</p>
                    <a href='https://www.facebook.com/photo?fbid=117669421275634&set=a.116619721380604'><BiCommentDetail className="comentar"/></a>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card2">
                <img src={img2} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5 >Plan de Escucha Vecinal</h5>
					<p>👉Qué ideas tenés para controlar el problema de los microbasurales?</p>
                    <a href='https://www.facebook.com/photo?fbid=121295144246395&set=a.116619721380604'><BiCommentDetail className="comentar"/></a>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card3">
                <img src={img3} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5>Plan de Escucha Vecinal</h5>
					<p>👉¿Vos qué problemáticas priorizás en materia de seguridad?</p>
                    <a href='https://www.facebook.com/photo?fbid=116619698047273&set=a.116619721380604'><BiCommentDetail className="comentar"/></a>
				</div>
			</div>
		</div>
	</div>
</body>

</div>   
        
    )
}
               
