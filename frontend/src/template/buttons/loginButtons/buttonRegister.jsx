import React from 'react'

export default props => {
    return (
        <div className='form-group checkbox has-success '>
            <div className="form-outline mb-4"> 
                <label className="form-label text-center" >
                    <input type="checkbox" name="keepLogIn" id="keepLogIn" value="" className="btn btn-info btn-md"/> {props.remember}
                </label>
            </div>
        </div>
    )
}