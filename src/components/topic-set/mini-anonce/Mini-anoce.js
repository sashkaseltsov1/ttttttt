import React from 'react';
import './styles.scss';

const MiniAnoce = ({subItem})=>{
    return <div className="mini-anonce">
        <div className="mini-anonce__img"><img src={subItem.image} alt=""/></div>
        <div className="mini-anonce__description">{subItem.description}</div>
    </div>
}

export default MiniAnoce;
