import React from 'react'
import './SecondBlock.css'
import img1 from  '../../assets/image 1.svg'
import img2 from '../../assets/image 2.png'
import img3 from'../../assets/image 3.svg'
import img4 from '../../assets/image 4.svg'
import img8 from '../../assets/image 8.svg'
import img7 from '../../assets/image 7.svg'
import img6 from '../../assets/image 6.svg'
import img5 from '../../assets/Image 5.svg'
export const SecondBlock = () => {
  return (
    <section className='secondblock'>
        <div className='container'>
            <h2>Our Products</h2>
              <div className='secondblock-in'>
                 <div className='block'>
                    <div className='blockImg'> <img src={img1} alt=''/>
                    <div  className='blockIcon'>-30%</div>
                    </div>
                    <div className='blockTitle'>
                        <h3>Syltherine</h3>
                        <p>Stylish cafe chair</p>
                        <span>Rp 2.500.000</span>
                        <span className='span__title'>Rp 3.500.000</span>
                    </div>
                 </div>

                 <div className="block">
                 <div className='blockImg'> <img src={img2} alt=''/>
                    <div  className='blockIcon'>-30%</div>
                    </div>
                    <div className='blocTitle'>
                        <h3>Leviosa</h3>
                        <p>Stylish cafe chair</p>
                        <span>Rp 2.500.000</span>
                 </div>
                 </div>
                 <div className='block'>
                 <div className='blockImg'> <img src={img3} alt=''/>
                    <div  className='blockIcon'>-50%</div>
                    </div>
                    <div className='blockTitle'>
                        <h3>Lolito</h3>
                        <p>Luxury big sofa</p>
                        <span>Rp 7.000.000</span>
                        <span className='span__title'>Rp 3.500.000</span>
                    </div>
                 </div>
                 <div className='block'>
                 <div className='blockImg'> <img src={img4} alt=''/>
                    <div  className='blockIcon_one'>New</div>
                    </div>
                    <div className='blockTitle'>
                        <h3>Respira</h3>
                        <p>Minimalist fan</p>
                        <span>Rp 500.000</span>
                    </div>
                 </div>
                 <div className='block'>
                    <img src={img8} alt=''/>
                    <div className='blockTitle'>
                        <h3>Grifo</h3>
                        <p>Night lamp</p>
                        <span>Rp 1.500.000</span>
                    </div>
                 </div>
                 <div className='block'>
                 <div className='blockImg'> <img src={img7} alt=''/>
                    <div  className='blockIcon_one'>New</div>
                    </div>
                    <div className='blockTitle'>
                    <h3>Muggo</h3>
                        <p>Small mug</p>
                        <span>Rp 150.000</span>
                    </div>
                 </div>
                 <div className='block'>
                 <div className='blockImg'> <img src={img6} alt=''/>
                    <div  className='blockIcong'>-50%</div>
                    </div>
                    <div className='blockTitle'>
                        <h3>Pingky</h3>
                        <p>Cute bed set</p>
                        <span>Rp 7.000.000</span>
                        <span className='span__title'>Rp 14.000.000</span>
                    </div>
                 </div>
                 <div className='block'>
                 <div className='blockImg'> <img src={img5} alt=''/>
                    <div  className='blockIcon_one'>New</div>
                    </div>
                    <div className='blockTitle'>
                        <h3>Potty</h3>
                        <p>Minimalist flower pot</p>
                        <span>Rp 500.000</span>
                    </div>
               </div>
        </div>
        </div>
        
    </section>
  )
}

export default SecondBlock;