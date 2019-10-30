export interface DataAction {
    type: string;
    payload: string[];
    selected: string[];
}

export interface DataState {
    storyTypes: string[];
    settings: string[];
    plotPoints: string[];
    selectedStoryType: string[];
    selectedSetting: string[];
    selectedPlotPoints: string[];
}