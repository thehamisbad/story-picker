import * as React from 'react';
import Picker from './components/Picker/Picker'
import operaitons from './interface/data/operations';

import './index.scss';
import './storyPicker.scss';
import { buildSelectedChoices } from './utils/selectedChoices';

export interface StoryPickerProps {
    storyTypes: string[];
    settings: string[];
    plotPoints: string[];
    selectedStoryType: string[];
    selectedSetting: string[];
    selectedPlotPoints: string[];
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

class StoryPicker extends React.Component<StoryPickerProps> {

    componentDidMount() {
        this.props.loadStoryTypes();
        this.props.loadSettings();
        this.props.loadPlotPoints();
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
                            <p>{ buildSelectedChoices(this.props.selectedStoryType, 1 ) }</p>
                            <p>{ buildSelectedChoices(this.props.selectedSetting, 1 ) }</p>
                            <p>{ buildSelectedChoices(this.props.selectedPlotPoints, 3 ) }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoryPicker;