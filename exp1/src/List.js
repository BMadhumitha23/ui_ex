import React, { useState } from 'react';
import './List.css'; // Import the CSS file for List component

const List = () => {
    const items = [
        { id: 1, name: 'ANIMAL', image: 'https://media.istockphoto.com/id/1353816537/photo/hamster-and-rabbit-sitting-side-by-side-animal-friendship-concept.jpg?s=612x612&w=0&k=20&c=qvniBg3dPlRJf3ZMZU7K9r2yZXC7VHGFItekCvRFK7Q=' },
        { id: 2, name: 'BIRD', image: 'https://cdn.pixabay.com/photo/2022/05/20/22/46/bird-7210351_640.jpg' },
        { id: 3, name: 'FLOWER', image: 'https://cdn.pixabay.com/photo/2017/04/12/23/32/daisy-2226164_640.jpg' },
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="list-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="item-container">
                {filteredItems.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.name} />
                        <div className="item-title">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
