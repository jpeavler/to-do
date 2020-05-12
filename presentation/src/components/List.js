import React from 'react';

const List = ({list}) => {
    const displayListItems = list.list_items.map((item, index) => {

        return(
            <li key = {index}>
                {item.name}<button>Complete</button>
                {item.due}
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