import React from 'react';
import './styles.scss';
import MiniAnoce from "./mini-anonce/Mini-anoce";

const TopicSet = ({item})=>{
    return <div className="topic-set">
        <div className="topic-set__title">{item.title}</div>
        <div className="topic-set__img"><img src={item.image} alt=""/></div>
        <div className="topic-set__description"><span >{item.description}</span></div>
        <div className="mini-anonces">
            {item.subItems.map((anonce, index)=><MiniAnoce subItem={anonce} key={index}/>)}
        </div>
    </div>
}

export default TopicSet;
