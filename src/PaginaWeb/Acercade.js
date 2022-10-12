

import Carousel from 'react-bootstrap/Carousel';

function Acercade() {
  return (<div>
    <h1 className='Acercade'>Acerca de</h1>
    <br></br><br></br>
    <Carousel fade className='container-md'>
      <Carousel.Item >
        <img
          className="ImagenAcerca"
          src="kevin.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption>
        <div className='CentrarInformacion'>
          <h3 className='tituloAcercade'>Kevin Rafael Guzman Arjona</h3>
          <p className='NombreAcercade'>Ing. en programación y Web Master.</p>
          <p className='NombreAcercade'>Tecnologias: JavaScript, PHP, CSS, HTML, SQL</p>
          <p className='NombreAcercade'>Contacto: Kevinprog@gmail.com</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="ImagenAcerca"
          src="daniel.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className='CentrarInformacion'>
          <h3 className='tituloAcercade'>Daniel Antonio Saravia Naal</h3>
          <p className='NombreAcercade'>Ing en programación y Web Master</p>
          <p className='NombreAcercade'>Tecnologias: JavaScript, PHP, CSS, HTML, SQL</p>
          <p className='NombreAcercade'>Contacto: danprog@gmail.com</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
<br></br><br></br><br></br>
                
  </div>);
}

export default Acercade;
