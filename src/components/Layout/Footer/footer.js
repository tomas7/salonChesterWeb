import React from 'react'
import myClass from './footer.module.scss'
import ContentWrapper from '../../../HOC/BodyWrapper/bodyWrapper'

function Footer() {
    return (
        <footer>
            <ContentWrapper>
                <div className={myClass.footerTextWrapper}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, vel.
                    </p>
                    <p>Test1<br></br>
                    Test1<br></br>
                    Test1<br></br>
                    Test1
                    </p>
                    <p>Test1<br></br>
                    Test1<br></br>
                    Test1
                    </p>
                </div>
            </ContentWrapper>
        </footer>
    )
}

export default Footer
