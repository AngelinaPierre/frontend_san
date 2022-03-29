import React from 'react'
import './sanofiForm.css'

export default props => (
    <div id='login'>
        <div className='container'>
            <div id="login-row">
                <div id='login-column' className='col-md-6'>
                    <div id='login-box' className='col-md-12'>
                        <form id="login-form" className="form" action="" method="post"> 
                            <h3 className="text-center text-info">Login</h3>  
                            <div className='form-group'>
                                <div className="form-outline mb-4">
                                    <label className="form-label    " htmlFor='exampleInputEmail'>Email</label>
                                    <input type="text" id="exampleInputEmail1" className="form-control" name="name_login" required="required" placeholder="Email"/>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className="form-outline mb-4"> 
                                    <label className="form-label" htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" id="exampleInputPassword1" className="form-control" name="passwordLog" required="required" placeholder="Password" /> 
                                </div>
                            </div>
                            <div className='form-group checkbox has-success '>
                                <div className="form-outline mb-4"> 
                                    <label className="form-label text-center" >
                                        <input type="checkbox" name="keepLogIn" id="keepLogIn" value="" className="btn btn-info btn-md"/> Remember-me
                                    </label>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className="form-outline mb-4"> 
                                    <button type='submit' className='btn btn-primary'>Login</button>
                                    <button type='submit' className='btn btn-primary'>Sign Up</button>
                                </div>
                                {/* <a href="#forRegistration" >Sign Up</a> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

)


// forma 2

