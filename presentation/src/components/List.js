import React from 'react';

const List = ({list, refresh}) => {
    let markComplete = (id, index, completeStatus) => {
        let tempList = list;
        tempList.list_items[index].complete = completeStatus;
        delete tempList._id;    //in order to make a patch request, the id has to be removed
        fetch(`${process.env.REACT_APP_API_URL}/api/lists/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(tempList)
        }).then(refresh);
    }

    let displayListItems = list.list_items.map((item, index) => {
        let checkOff;
        let completed;
        if(!item.complete){
            checkOff = <button onClick={() => markComplete(list._id, index, true)}>Check off</button>
        }else {
            checkOff = <button onClick={() => markComplete(list._id, index, false)}>Restore</button>
            completed = "Complete!"
        }
        return(
            <li key = {index}>
                {item.name}
                {checkOff}{completed}
                <ul>
                    <li>{item.desc}</li>
                    <li>{item.due}</li>
                </ul>
            </li>
        );
    });
    return(
        <div className="List">
            <h2>{list.name}</h2>
            <p>{list.desc}</p>
            <ul>{displayListItems}</ul>
        </div>
    )
}

export default List;