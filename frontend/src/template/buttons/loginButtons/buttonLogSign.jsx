import React from 'react'

export default props => {
    return (
        <div className='form-group'>
            <div className="form-outline mb-4"> 
                <button type='submit' className='btn btn-primary'>{props.login}</button>
                <button type='submit' className='btn btn-primary'>{props.register}</button>
            </div>
        </div>
    )
}