import React, {useState} from 'react';

const AddList = ({refresh}) => {
    const [listName, setLName] = useState('');
    const [listDesc, setLDesc] = useState('');
    const [listItems, setLItems] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const tempArr = listItems;   //toDo: push List Items onto this
        setLItems(tempArr);
        const newList = {name: listName, desc: listDesc, list_items: listItems};
        fetch(`${process.env.REACT_APP_API_URL}/api/lists`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newList)
        }).then(refresh)
            .then(() => setLName(''))
            .then(() => setLDesc(''))
            .then(() => setLItems([]));
    }

    const handleLIChange = (key, value, index) => {
        let tempArr = listItems;
        let newListItem = tempArr[index];
        newListItem[key] = value;
        newListItem.complete = false;
        setLItems(tempArr);
    }

    const handleRemove = (index) => {
        setLItems(listItems.filter((s, _index) => index !== _index));
    }

    const renderListItemForm = () => {
        return listItems.map((listItem, index) => {
            return(
                <span key={index}>
                    <input value={listItem.name} 
                        type="text" 
                        onChange={({target}) => handleLIChange("name", target.value, index)} 
                        placeholder={`List Item #${index +1} Name`} required/>
                    <textarea value={listItem.desc} 
                        type="text" 
                        onChange={({target}) => handleLIChange("desc", target.value, index)} 
                        placeholder={`List Item #${index + 1} Description`}/>
                    <input value={listItem.due} 
                        type="date" 
                        onChange={({target}) => handleLIChange("due", target.value, index)} 
                        placeholder="Due Date"/>
                        <button type="button" 
                        onClick={() => handleRemove(index)}>X</button>
                </span>
            )
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
            <button type="button" onClick={() => setLItems(listItems.concat([{}]))}>+ Add Another List Item</button>
            {renderListItemForm()}
            <input type="Submit" defaultValue="Create List"/>
        </form>
    )
}

export default AddList;