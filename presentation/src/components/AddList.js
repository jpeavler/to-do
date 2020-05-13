import React, {useState} from 'react';

const AddList = ({refresh}) => {
    const [listName, setLName] = useState('');
    const [listDesc, setLDesc] = useState('');
    const [listItems, setLItems] = useState([]);
    const [listItemName, setLIName] = useState([]);
    const [listItemDesc, setLIDesc] = useState([]);
    const [listItemDue, setLIDue] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const tempArr = listItems;   //toDo: push List Items onto this
        setLItems(tempArr);
        const complete = false; //will be used to make all list items not complete when made
        const newList = {name: listName, desc: listDesc, list_items: listItems};
        fetch(`${process.env.REACT_APP_API_URL}/api/lists`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newList)
        }).then(refresh)
            .then(() => setLName(''))
            .then(() => setLDesc(''))
            .then(() => setLItems([]))
            .then(() => setLIName([]))
            .then(() => setLIDesc([]));
    }
    const renderListItemForm = () => {
        listItemForm = listItems.map((listItem, index) => {
            <form>
                <input value={listItemName} 
                    type="text" 
                    onChange={({target}) => setLIName(target.value)} 
                    placeholder={`List Item #${index +1} Name`} required/>
                <textarea value={listItemDesc} 
                    type="text" 
                    onChange={({target}) => setLIDesc(target.value)} 
                    placeholder={`List Item #${index + 1} Description`}/>
                <input value={listItemDue} 
                    type="date" 
                    onChange={({target}) => setLIDue(target.value)} 
                    placeholder="Due Date"/>
            </form>
        });
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
            <button onClick={() => setLItems(listItems.concat(['']))}>+ Add Another List Item</button>
            <input type="Submit" value="Create List"/>
        </form>
    )
}

export default AddList;