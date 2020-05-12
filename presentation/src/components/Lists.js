import React, {useState, useEffect} from 'react';
import List from './List';

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
                list={list}/>
    });

    return (
        <div className='Lists'>
            {displayLists}
        </div>
    )
}

export default Lists;