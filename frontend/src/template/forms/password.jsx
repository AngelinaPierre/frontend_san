import React from 'react'

export default props => {
    return (
        <div className='form-group'>
            <div className="form-outline mb-4"> 
                <label className="form-label" htmlFor="exampleInputPassword1">{props.pass}</label>
                <input type="password" id="exampleInputPassword1" className="form-control" name="passwordLog" required="required" placeholder="Password" /> 
                </div>
        </div>
    )
}