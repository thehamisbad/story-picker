import * as React from 'react';
import Picker from './components/Picker/Picker'
import operaitons from './interface/data/operations';

import './index.scss';

export interface StoryPickerProps {
    storyTypes: string[];
    settings: string[];
    loadStoryTypes: () => void;
    loadSettings: () => void;
}

class StoryPicker extends React.Component<StoryPickerProps> {

    componentDidMount() {
        console.log('mounted');
        this.props.loadStoryTypes();
        this.props.loadSettings();
    }

    render () {
        return (
            <div className='App-wrapper'>
                <div className='App'>
                    <h1 className='App-title'>Story Generator</h1>
                    <div className='Pickers'>
                        <Picker
                            title='Pick a Story Type'
                            selected={ null }
                            items={ this.props.storyTypes } 
                            id='story-type-picker'
                        />
                        <Picker
                            title='Pick a Setting'
                            selected={ null }
                            items={ this.props.settings } 
                            id='setting-picker'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default StoryPicker;