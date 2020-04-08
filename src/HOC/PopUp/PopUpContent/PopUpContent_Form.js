import React from 'react'
import myClass from './PopUpContent.module.scss'
import arrow from '../../../images/Icons/Arrow.png'

function PopUpContent_Form(props) {
    return (
        <>
            <div className={myClass.textWrapper}>
            <div className={myClass.formColWrapperBig}>
            <h1>Fill the form</h1>
                    <form>
                        <div className={myClass.formColWrapper}>
                        <div className={myClass.fNameField}>
                            <label>
                                Full name:
                                <input className={myClass.inputR} onChange={props.setfName} type="text" name="full name" placeholder="John Great" />
                               
                            </label>
                        </div>
                        <div className={myClass.emailField}>
                            <label>
                                Email:
                                <input className={myClass.inputR} onChange={props.seteMail} type="text" name="email" placeholder="johngreatcorp@gc.com" />
                             
                            </label>
                        </div>

                        <div className={myClass.copmanyField}>
                            <label>
                                Company:
                                <input className={myClass.inputR} onChange={props.setfBreed} type="text" name="Company" placeholder="gcorp" />
                        
                            </label>
                        </div>

                        <div  className={myClass.messageField}>
                            <label>
                                Text:
                                <textarea className={myClass.inputR} onChange={props.setMsg} type="text" name="Text" placeholder="Hi, we might need assistance with..." />
                                
                            </label>
                        </div>

                    
                        </div>
                     
                        {/* <input type="submit" value="Submit" /> */}
                </form>
                {/* <div className={myClass.socialActionWrapper}>
                    <a className={myClass.socialAction} href={console.log("send")}></a><img src={arrow} alt=""/>
                </div> */}
                </div>
            {props.children}
            </div>
        </>
    )
}

export default PopUpContent_Form
