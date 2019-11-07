import * as React from 'react';
import StoryPicker from './containers/StoryPicker';

import './index.scss';

class App extends React.Component {
    render() {
        return (
            <div className='App-wrapper'>
                <div className='App-heading'>
                    <h1 className='App-title'>Story Generator</h1>
                </div>
                <div className='App'>
                    <StoryPicker />
                </div>
            </div>
        )
    }
}

export default App;