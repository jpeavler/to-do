import React, {useState, useEffect} from 'react';
import List from './List';
import AddList from './AddList';

const Lists = () => {
    const [lists, setLists] = useState([]);

    useEffect(() =>{
        getLists();
    }, []);

    const getLists = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/lists`)
            .then(response => response.json())
            .then(lists => setLists(lists));
    }

    const displayLists = lists.map((list) => {
        return <List key = {list._id} 
                list={list} 
                refresh={getLists}/>
    });

    return (
        <div className='Lists'>
            <h1>My To Do Lists</h1>
            <AddList refresh={getLists}/>
            {displayLists}
        </div>
    )
}

export default Lists;