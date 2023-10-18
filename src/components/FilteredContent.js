import React, { useState } from 'react';

function FilteredContent({ data }) {
    const [filterOptions, setFilterOptions] = useState({
        size: false,
        color: false,
        post: false,

        // Добавьте другие свойства, которые вы хотите фильтровать
    });

    // Функция для обработки изменения состояния флажков
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFilterOptions({
            ...filterOptions,
            [name]: checked,
        });
    };

    // Фильтрация элементов списка на основе выбранных свойств
    const filteredList = data.filter((item) => {
        return Object.keys(filterOptions).every((key) => {
            if (filterOptions[key]) {
                return item[key];
            }
            return true;
        });
    });

    return (
        <div>
            {Object.keys(filterOptions).map((key) => (
                <label key={key}>
                    <input
                        type="checkbox"
                        name={key}
                        onChange={handleCheckboxChange}
                        checked={filterOptions[key]}
                    />
                    Показывать элементы с {key}
                </label>
            ))}
            <ul className="App-list">
                {filteredList.map((item, index) => (
                    <li key={index} className="App-list-element">
                        <img className="App-img" src={item.src} alt={item.alt}/>
                        <h6>
                            {item.text}
                        </h6>
                        <p style={{fontSize:"12px"}}>
                            {item.post}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilteredContent;
