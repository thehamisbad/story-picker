export interface DataAction {
    type: string;
    payload: {
        storyTypes: string[];
        settings: string[];
    }
}

export interface DataState {
    storyTypes: string[];
    settings: string[];
}