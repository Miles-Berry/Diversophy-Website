import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrip.min.css"

const App = () => {
    return (
        <router>
            
            <Navbar />
            <br/>
            <Route path='/' exact component={CardList} />
            <Route path='/cards/add' component={AddCard} />
            <Route path='/edit/:id' component={EditCard} />

        </router>
    );
}

export default App;