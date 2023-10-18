import React, { useState } from 'react';

function FilteredList({ data }) {
    const [showBySize, setShowBySize] = useState(false);
    const [showByPost, setShowByPost] = useState(false);
    // Функция для обработки изменения состояния флажка
    const handleCheckboxChange = () => {
        setShowBySize(!showBySize);
    };
    const handleSelectByPost = () => {
        setShowByPost(!showByPost);
    };

    // Фильтрация элементов списка на основе свойства "size"
    const filteredList = showBySize
        ? data.filter(item => item.size)
        : showByPost
        ? data.filter(item => item.post)
            : data;
    //  const filteredList = data;
    //  switch (filteredList) {
    //      case showByPost : data.filter(item => item.post);
    //      break;
    //      case showBySize : data.filter(item => item.size);
    //      break;
    //      default : data.filter(item => item);
    // }

    return (
        <div>
            <label>
                <input type="checkbox" onChange={handleCheckboxChange} checked={showBySize} />
                Показывать элементы с size
            </label>
            <label>
                <input type="checkbox" onChange={handleSelectByPost} checked={showByPost} />
                Показывать элементы c post
            </label>
            <ul>
                {filteredList.map((item, index) => (
                    <li key={index}>
                        <img className="App-img" src={item.src} alt={item.alt}/>
                        <h6>
                            {item.text}
                        </h6>
                        <p>
                            {item.post}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilteredList;
