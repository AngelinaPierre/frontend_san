import React from 'react'

export default props => (
    <form method="post" action=""> 
        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">Username / Email</label>
            <input type="text" id="form2Example1" className="form-control" name="name_login" required="required" placeholder="Username / Email"/>
        </div>
        <div className="form-outline mb-4"> 
            <label className="form-label" htmlFor="form2Example1">Password</label>
            <input type="password" id="form2Example2" className="form-control" name="passwordLog" required="required" placeholder="Password" /> 
        </div>
                
        <div className="form-outline mb-4"> 
            <input type="checkbox" name="keepLogIn" id="keepLogIn" value="" /> 
            <label className="form-label" htmlFor="form2Example1" > Keep Sign-In </label>
        </div>
                
        <div className="form-outline mb-4"> 
            <input type="submit" value="Logar" /> 
            <a href="#paracadastro">Sign Up</a>
        </div>
    </form>
)