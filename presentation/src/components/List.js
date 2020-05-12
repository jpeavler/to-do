import React from 'react';

const List = ({list}) => {
    const displayListItems = list.list_items.map((item, index) => {
        return(
            <li key = {index}>{item.name}</li>
        )
    });
    return(
        <div>
            <h2>List Name: {list.name}</h2>
            <ul>{displayListItems}</ul>
        </div>
    )
}

export default List;