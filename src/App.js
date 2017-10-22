import React, {Component} from 'react';
import './styles/App.css';
import './component/lunbo/lunbocss.css';
import Header from './study/Header'
import { Input } from 'antd';
import lunboComponent from './component/lunbo/lunboComponent.js';
class App extends Component {

    render() {
        const Search = Input.Search;
        return (
            <div className="App">
                <Header/>
                <lunboComponent
                    number={4} className='content' interval={4000}  >
                </lunboComponent>
            </div>
        );
    }

}

export default App;
