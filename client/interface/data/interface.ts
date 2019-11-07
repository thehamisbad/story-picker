export interface DataAction {
    type: string;
    payload: Data[];
    selected: Data[];
}

export interface DataState {
    storyTypes: Data[];
    settings: Data[];
    plotPoints: Data[];
    selectedStoryType: Data[];
    selectedSetting: Data[];
    selectedPlotPoints: Data[];
}

export interface Data {
    id: number;
    label: string;
    type?: string;
}

export interface SelectedStoryProps {
    storyType: Data[];
    setting: Data[];
    plotPoints: Data[];
}