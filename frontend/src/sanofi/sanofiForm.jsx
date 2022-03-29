import React from 'react'
import Button from '../template/buttons/buttonLogSign'
import ButtonRegister from '../template/buttons/buttonRegister'
import Email from '../template/forms/email'
import Password from '../template/forms/password'
import './sanofiForm.css'

export default props => (
    <div id='login'>
        <div className='container'>
            <div id="login-row">
                <div id='login-column' className='col-md-6'>
                    <div id='login-box' className='col-md-12'>
                        <form id="login-form" className="form" action="" method="post"> 
                            <h3 className="text-center text-info">{props.title}</h3>  
                            <Email email='Email'/>
                            <Password pass='Password' />
                            <ButtonRegister remember="Remember-me" />
                                <Button login="Login" register="Sign Up" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

