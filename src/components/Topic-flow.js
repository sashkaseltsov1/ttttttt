import React from 'react';
import './styles.scss';
import {Items} from "../data/data";
import TopicSet from "./topic-set/Topic-set";




const TopicFlow = ()=>{
    return <div className="topic-flow">
        {Items.map((item, index)=><TopicSet item={item} key={index} />)}
    </div>
}

export default TopicFlow;
