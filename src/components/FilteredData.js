import React, { useState } from 'react';

function FilteredData({ data }) {
    const [selectedProperty, setSelectedProperty] = useState(''); // Изначально выбрано пустое свойство

    // Обработчик изменения выбранного свойства в <select>
    const handleSelectChange = (event) => {
        setSelectedProperty(event.target.value);
    };

    // Фильтрация элементов списка на основе выбранного свойства
    const filteredList = data.filter((item) => {
        if (selectedProperty) {
            return item[selectedProperty];
        }
        return true; // Если ничего не выбрано, показывать все элементы
    });

    return (
        <div>
            <label>
                Выберите свойство для фильтрации:
                <select value={selectedProperty} onChange={handleSelectChange}>
                    <option value="">-- Выберите свойство --</option>
                    <option value="size">Размер</option>
                    <option value="color">Цвет</option>
                    {/* Добавьте другие свойства, которые вы хотите фильтровать */}
                </select>
            </label>
            <ul>
                {filteredList.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default FilteredData;
