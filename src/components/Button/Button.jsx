import React from 'react'
import './Button.scss'

const Button = ( { text, size, status, onClick, variant, type } ) => {
    return (
        <>
            <button 
            type={type ? type : 'button'}
            className={ 
                `btn btn-${ size ? size: 'medium'} 
                ${ status ? status : 'neutral'} 
                btn-${ variant ? variant : 'default'}
            `}> { text || 'Button' } </button>
        </>
    )
}

export default Button;