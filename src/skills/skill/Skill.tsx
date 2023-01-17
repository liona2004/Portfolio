import React from 'react';
import style from './Skill.module.css';

type StyleType = {
    title: string
    description: string
}

function Skill(props: StyleType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}

export default Skill;
