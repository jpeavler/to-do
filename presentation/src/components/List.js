import React from 'react';

const List = ({list}) => {
    let displayListItems = list.list_items.map((item, index) => {
        let checkOff;
        if(!item.complete){
            checkOff = <button>Check off</button>
        }else {
            checkOff = <button>Restore</button>
        }
        return(
            <li key = {index}>
                {item.name}
                {checkOff}
                <ul>
                    <li>{item.desc}</li>
                    <li>{item.due}</li>
                </ul>
            </li>
        );
    });
    return(
        <div>
            <h2>{list.name}</h2>
            <p>{list.desc}</p>
            <ul>{displayListItems}</ul>
        </div>
    )
}

export default List;