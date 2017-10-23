import React, {Component} from 'react';
import './styles/App.css';
import Header from './study/Header'
import { Input } from 'antd';
import LunboComponent from './component/lunbo/lunboComponent';
class App extends Component {

    render() {
        const Search = Input.Search;
        return (
            <div className="App">
                <Header/>
                <LunboComponent  />
            </div>
        );
    }

}

export default App;
