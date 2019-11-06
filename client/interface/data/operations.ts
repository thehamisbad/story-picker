import actions from './actions';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';

const loadStoryTypes = () => (dispatch: Dispatch<any>) => {
    console.log('loading story types');
    axios.get('http://localhost:3000/data/story-types')
        .then((response: AxiosResponse<string[]>) => {
            dispatch(actions.loadStoryTypes(response.data));
        });
}

const loadSettings = () => (dispatch: Dispatch<any>) => {
    axios.get('http://localhost:3000/data/settings')
        .then((response: AxiosResponse<string[]>) => {
            dispatch(actions.loadSettings(response.data));
        });
}

const loadPlotPoints = () => (dispatch: Dispatch<any>) => {
    axios.get('http://localhost:3000/data/plot-points')
        .then((response: AxiosResponse<string[]>) => {
            dispatch(actions.loadPlotPoints(response.data));
        });
}

const selectStoryType = (storyType: string[]) => (dispatch: Dispatch<any>) => {
    dispatch(actions.selectStoryType(storyType));
}

const selectSetting = (setting: string[]) => (dispatch: Dispatch<any>) => {
    dispatch(actions.selectSetting(setting));
}

const selectPlotPoint = (plotPoint: string[]) => (dispatch: Dispatch<any>) => {
    dispatch(actions.selectPlotPoint(plotPoint));
}

const clearStoryType = () => (dispatch: Dispatch<any>) => {
    dispatch(actions.selectStoryType([]));
}

const clearSetting = () => (dispatch: Dispatch<any>) => {
    dispatch(actions.selectSetting([]));
}

const clearPlotPoint = () => (dispatch: Dispatch<any>) => {
    dispatch(actions.selectPlotPoint([]));
}

export default {
    loadStoryTypes,
    loadSettings,
    loadPlotPoints,
    selectStoryType,
    selectSetting,
    selectPlotPoint,
    clearStoryType,
    clearSetting,
    clearPlotPoint,
};