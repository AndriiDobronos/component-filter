import logo from './logo.svg';
import './App.css';
import contents from "./utils/allData.js";
import {useState} from "react";
import FilteredList from "./components/FilteredList.js";
import FilteredContent from "./components/FilteredContent";
import FilteredData from "./components/FilteredData";

function App() {
    const [show,setShow] = useState(false)
    const data = [
        { text: 'Элемент 1', size: true, color: true},
        { text: 'Элемент 2', size: false, color: true },
        { text: 'Элемент 3', size: true, color: false },
        { text: 'Элемент 4', size: false, color: false },
        // Добавьте больше элементов с разными значениями size
    ];
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1>Список с фильтром по свойству "size"</h1>
          <FilteredContent  data={data} />
          <FilteredContent data={contents.list} />
          <FilteredData  data={contents.list} />
          <ul className="App-list">
              {contents.list.map(content => {
                  return <div>
                      <li className="App-list-element" key={content.id}>
                          <img className="App-img" src={content.src} alt={content.alt}/>
                          <h2 className="App-title">{content.id}</h2>
                          <p className="App-text">{content.text}</p>
                      </li>
                  </div>

              })}
          </ul>
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
