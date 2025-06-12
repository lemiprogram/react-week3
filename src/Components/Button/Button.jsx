import React from 'react'
import './Button.css'
function Button({paras}) {
    const {func,buttonText,toolTipText} = paras
  return (
    <>
            <div 
                className="btn"
                onClick={func}
            >
                {buttonText}
                <div className="btn-toolTip capitalize">{toolTipText}</div>
            </div>
    </>
  )
}

export default Button