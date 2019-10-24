import * as React from 'react';
import Picker from './components/Picker/Picker'

import './index.scss';
const storyTypes = require('../data/story-types.json');
const settings = require('../data/settings.json');

class App extends React.Component {

    render () {
        return (
            <div className='App-wrapper'>
                <div className='App'>
                <h1 className='App-title'>Story Generator</h1>
                <div className='Pickers'>
                    <Picker
                        title='Pick a Story Type'
                        selected={ null }
                        items={ storyTypes } 
                        id='story-type-picker'
                    />
                    <Picker
                        title='Pick a Setting'
                        selected={ null }
                        items={ settings } 
                        id='setting-picker'
                    />
                </div>
                </div>
            </div>
        );
    }
}

export default App;