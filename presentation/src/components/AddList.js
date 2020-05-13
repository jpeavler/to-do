import React, {useState} from 'react';

const AddList = ({refresh}) => {
    const [listName, setLName] = useState('');
    const [listDesc, setLDesc] = useState('');
    const [list, setList] = useState([]);
    const [numListItems, setnumLItems] = useState(0);   //Helps to render number of inputs needed

    const handleSubmit = (event) => {
        event.preventDefault();
        const tempArr = list;   //toDo: push List Items onto this
        setList(tempArr);
        const complete = false; //will be used to make all list items not complete when made
        const newList = {name: listName, desc: listDesc, list_items: list};
        fetch(`${process.env.REACT_APP_API_URL}/api/lists`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newList)
        }).then(refresh)
            .then(() => setLName(''))
            .then(() => setLDesc(''))
            .then(() => setList([]))
            .then(() => setnumLItems(0));
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={listName}
                    type="text" 
                    onChange={({target}) => setLName(target.value)} 
                    placeholder="List Name" 
                    required/>
            <textarea value={listDesc}
                    type="text" 
                    onChange={({target}) => setLDesc(target.value)} 
                    placeholder="List Description"/>
            <button onClick={({target}) => setList(list++)}>Add Another List Item</button>
            <input type="Submit" value="Create List"/>
        </form>
    )
}

export default AddList;