import React from 'react'
import myClass from './footer.module.scss'
import ContentWrapper from '../../../HOC/BodyWrapper/bodyWrapper'

import fb_i from '../../../images/Icons/fb_w.png'

function Footer() {
    return (
        <footer>
            <ContentWrapper>
                <div className={myClass.footerTextWrapper}>
                    <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed est voluptatem fuga nostrum quibusdam! Exercitationem aperiam consequatur itaque autem iusto. Quas iste adipisci aspernatur harum.
                    </p>
                    </div>
                
                    <div>
                        <h2>Services</h2>
                        <p>Grooming<br></br>
                        Courses<br></br>
                        Accessories 
                        </p>
                    </div>
                  
                    <div>
                        <h2>Location</h2>
                        <p>
                        Hviezdoslavovo námestie 1694<br></br>
                        02601 Dolný Kubín<br></br>
                        +421 944 419 765
                        </p>
                        <div>
                            <p>Follow us:</p>
                            <img src={fb_i} alt="blank"/>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </footer>
    )
}

export default Footer
