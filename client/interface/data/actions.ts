import types from './types';

const loadStoryTypes = (storyTypes: string[]) => ({
    type: types.LOAD_STORY_TYPES,
    payload: {
        storyTypes
    }
});

const loadSettings = (settings: string[]) => ({
    type: types.LOAD_SETTINGS,
    payload: {
        settings
    }
});

export default {
    loadStoryTypes,
    loadSettings,
}