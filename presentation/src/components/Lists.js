import React, {useState, useEffect} from 'react';

const Lists = () => {
    const [lists, setLists] = useState([{}]);

    useEffect(() =>{
        getLists();
    }, []);

    const getLists = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/lists`)
            .then(response => response.json())
            .then(lists => setLists(lists));
    }

    const displayLists = lists.map((list) => {
        return <div>List Name: {list.name}</div>
    });

    return (
        <div className='Lists'>
            {displayLists}
            <h1>Hello World</h1>
        </div>
    )
}

export default Lists;