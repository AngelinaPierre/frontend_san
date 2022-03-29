import React from 'react'

export default props => {
    return (
        <div className='form-group'>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor='exampleInputEmail'>{props.email}</label>
                <input type="text" id="exampleInputEmail1" className="form-control" name="name_login" required="required" placeholder="Email"/>
            </div>
        </div>
    )
}