import * as React from 'react';
import Picker from '../Picker/Picker'
import PickedChoice from '../Picker/PickedChoice';
import { Data } from '../../interface/data/interface';
import { RandomRequest } from '../../interface/randomize/interface';
import { Dropdown } from 'react-bootstrap';

import './storyPicker.scss';


interface StoryPickerVariables {
    storyTypes: Data[];
    settings: Data[];
    plotPoints: Data[];
    selectedStoryType: Data[];
    selectedSetting: Data[];
    selectedPlotPoints: Data[];
}

interface StoryPickerFunctions {
    loadStoryTypes: () => void;
    loadSettings: () => void;
    loadPlotPoints: () => void;
    selectStoryType: (storyType: Data[]) => void;
    selectSetting: (setting: Data[]) => void;
    selectPlotPoint: (plotPoint: Data[]) => void;
    clearStoryType: () => void;
    clearSetting: () => void;
    clearPlotPoint: () => void;
    randomize: (randomReq: RandomRequest) => void;
}

export interface StoryPickerProps extends StoryPickerVariables, StoryPickerFunctions {
}

export interface StoryPickerState {
    numToGenerate: number;
}

const STORY_TYPE = 'Story Type';
const STORY_TYPE_LIMIT = 1;
const SETTING = 'Setting';
const SETTING_LIMIT = 1;
const PLOT_POINT = 'Plot Points';
const PLOT_POINT_LIMIT = 3;

class StoryPicker extends React.Component<StoryPickerProps, StoryPickerState> {

    constructor(props: StoryPickerProps) {
        super(props);
        this.state = {
            numToGenerate: 1,
        };
    }

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

    displayChoice(label: string, data: Data[], upTo: number) {
        return (
            <div className='Choice'>
                <div className='Choice-label'>{ label }</div>
                <PickedChoice selected={ data } upTo={ upTo } />
            </div>
        )
    }

    randomize() {
        const ammount = this.state.numToGenerate;
        this.props.randomize({
            ammount,
            storyType: {
                selected: this.props.selectedStoryType,
                choices: this.props.storyTypes,
                upTo: STORY_TYPE_LIMIT
            },
            setting: {
                selected: this.props.selectedSetting,
                choices: this.props.settings,
                upTo: SETTING_LIMIT
            },
            plotPoint: {
                selected: this.props.selectedPlotPoints,
                choices: this.props.plotPoints,
                upTo: PLOT_POINT_LIMIT
            },
        });
    }

    changeNumberGenerated(key: string) {
        this.setState({ numToGenerate: parseInt(key) });
    }

    randomChoiceDropdown() {
        const items = new Array(10).fill('item');
        return (
            <Dropdown onSelect={ this.changeNumberGenerated.bind(this) }>
                <Dropdown.Toggle id='generate-random-choices'>
                    { this.state.numToGenerate }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    { items.map((_value, index) => (
                        <Dropdown.Item key={'random-choice-' + index} eventKey={[index + 1].join('')}>{ index + 1 }</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    render () {
        return (
            <div className='StoryPickers'>
                <div className='Pickers'>
                    <Picker
                        title={ STORY_TYPE }
                        selected={ this.props.selectedStoryType }
                        upTo={ STORY_TYPE_LIMIT }
                        items={ this.props.storyTypes } 
                        id='story-type-picker'
                        choose={ this.props.selectStoryType }
                        clear={ this.props.clearStoryType }
                    />
                    <Picker
                        title={ SETTING }
                        selected={ this.props.selectedSetting }
                        upTo={ SETTING_LIMIT }
                        items={ this.props.settings } 
                        id='setting-picker'
                        choose={ this.props.selectSetting }
                        clear={ this.props.clearSetting }
                    />
                    <Picker
                        title={ PLOT_POINT }
                        selected={ this.props.selectedPlotPoints }
                        upTo={ PLOT_POINT_LIMIT }
                        items={ this.props.plotPoints } 
                        id='plot-points-picker'
                        choose={ this.props.selectPlotPoint }
                        clear={ this.props.clearPlotPoint }
                    />
                </div>
                <div className='Pickers-choices'>
                    <div className='Pickers-selected'>
                        { this.displayChoice(STORY_TYPE, this.props.selectedStoryType, STORY_TYPE_LIMIT)}
                        { this.displayChoice(SETTING, this.props.selectedSetting, SETTING_LIMIT)}
                        { this.displayChoice(PLOT_POINT, this.props.selectedPlotPoints, PLOT_POINT_LIMIT)}
                    </div>
                    <div className='Pickers-choiceButtons'>
                        { this.randomChoiceDropdown() }
                        <button
                            className="Picker-randomize secondary"
                            onClick={ () => this.randomize() }
                        >
                            Randomize
                        </button>
                        <button 
                            className='Picker-clear primary'
                            onClick={ () => this.clearChoices() }
                        >
                            Clear All
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoryPicker;