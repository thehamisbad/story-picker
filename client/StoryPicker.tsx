import * as React from 'react';
import Picker from './components/Picker/Picker'
import PickedChoice from './components/Picker/PickedChoice';
import operaitons from './interface/data/operations';

import './index.scss';
import './storyPicker.scss';

interface StoryPickerVariables {
    storyTypes: string[];
    settings: string[];
    plotPoints: string[];
    selectedStoryType: string[];
    selectedSetting: string[];
    selectedPlotPoints: string[];
}

interface StoryPickerFunctions {
    loadStoryTypes: () => void;
    loadSettings: () => void;
    loadPlotPoints: () => void;
    selectStoryType: (storyType: string[]) => void;
    selectSetting: (setting: string[]) => void;
    selectPlotPoint: (plotPoint: string[]) => void;
    clearStoryType: () => void;
    clearSetting: () => void;
    clearPlotPoint: () => void;
}

export interface StoryPickerProps extends StoryPickerVariables, StoryPickerFunctions {
}

class StoryPicker extends React.Component<StoryPickerProps> {

    componentDidMount() {
        this.props.loadStoryTypes();
        this.props.loadSettings();
        this.props.loadPlotPoints();
    }

    clearChoices() {
        this.props.clearStoryType();
        this.props.clearSetting();
        this.props.clearPlotPoint();
    }

    render () {
        return (
            <div className='App-wrapper'>
                <div className='App-heading'>
                    <h1 className='App-title'>Story Generator</h1>
                </div>
                <div className='App'>
                    <div className='App-storyPickers'>
                        <div className='Pickers'>
                            <Picker
                                title='Pick a Story Type'
                                selected={ this.props.selectedStoryType }
                                upTo={ 1 }
                                items={ this.props.storyTypes } 
                                id='story-type-picker'
                                choose={ this.props.selectStoryType }
                                clear={ this.props.clearStoryType }
                            />
                            <Picker
                                title='Pick a Setting'
                                selected={ this.props.selectedSetting }
                                upTo={ 1 }
                                items={ this.props.settings } 
                                id='setting-picker'
                                choose={ this.props.selectSetting }
                                clear={ this.props.clearSetting }
                            />
                            <Picker
                                title='Pick Plot Points'
                                selected={ this.props.selectedPlotPoints }
                                upTo={ 3 }
                                items={ this.props.plotPoints } 
                                id='plot-points-picker'
                                choose={ this.props.selectPlotPoint }
                                clear={ this.props.clearPlotPoint }
                            />
                        </div>
                        <div className='Pickers-choices'>
                            <div className='Pickers-clearChoices'>
                                <button 
                                    className='Picker-clear primary'
                                    onClick={ () => this.clearChoices() }
                                >
                                    Clear All
                                </button>
                            </div>
                            <div className='Pickers-selected'>
                                <div><PickedChoice selected={ this.props.selectedStoryType } upTo={1} /></div>
                                <div><PickedChoice selected={ this.props.selectedSetting } upTo={1} /></div>
                                <div><PickedChoice selected={ this.props.selectedPlotPoints } upTo={3} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoryPicker;