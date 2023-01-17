import React, { Component } from 'react'

const Tabbar = (props) => {

    // function handleClick(index){
    //     props.event(index);
    // }
    return (
        <div>
            <ul >
                {
                    props.list.map((item, index) =>
                        <li onClick={
                            () => props.event(idnex)}
                            className={props.current === index ? 'active' : ''}
                            key={item.id}>{item.Text}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default Tabbar
