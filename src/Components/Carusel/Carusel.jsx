import { useState, useEffect } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import './Carusel.css'

    const Carusel = () => {
        const [renderImg, setRenderImg] = useState(0)

        const Slides = [
            { url: 'https://tecnosoluciones.com/wp-content/uploads/2019/03/ComercioAlDetal.jpg' },
            { url: 'https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-de-banner-imagen-tecnolog%C3%ADa-inform%C3%A1tica-iconos-y-monitor-pc-realismo-banderas-web-planas-para-empresas-internet-etc-161238432.jpg' },
            { url: 'https://tecnosoluciones.com/wp-content/uploads/2019/03/ComercioAlDetal.jpg' },
            { url: 'https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-de-banner-imagen-tecnolog%C3%ADa-inform%C3%A1tica-iconos-y-monitor-pc-realismo-banderas-web-planas-para-empresas-internet-etc-161238432.jpg' }
          ];
        
          const Prev = () => {
            const FirstSlice = renderImg === 0;
            const Index = FirstSlice ? Slides.length - 1 : renderImg - 1;
            setRenderImg(Index);
          };
        
          const Next = () => {
            const LastSlice = renderImg === Slides.length - 1;
            const Index = LastSlice ? 0 : renderImg + 1;
            setRenderImg(Index);
          };
        
          useEffect(() => {
            document.title = `Imagen ${renderImg + 1} de ${Slides.length}`;
          }, [renderImg, Slides]);
        
          return (
            <div>
              <div className='CaruselContainer'>
                <BsFillArrowLeftCircleFill className='IconArrowL' onClick={Next}/>
                <div className="ImgContainer" style={{ backgroundImage: `url(${Slides[renderImg].url})` }}></div>
                <BsFillArrowRightCircleFill className='IconArrowR' onClick={Prev}/>
              </div>
            </div>
          );
        
        
    }

export default Carusel