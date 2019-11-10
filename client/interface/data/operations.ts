import actions from './actions';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { Data } from './interface';

const server = process.env.NODE_ENV === 'production' ? 'https://story-picker.herokuapp.com' : 'http://localhost:3000';

const loadStoryTypes = () => (dispatch: Dispatch<any>) => {
    axios.get(server + '/data/story-types')
        .then((response: AxiosResponse<Data[]>) => {
            dispatch(actions.loadStoryTypes(response.data));
        });
}

const loadSettings = () => (dispatch: Dispatch<any>) => {
    axios.get(server + '/data/settings')
        .then((response: AxiosResponse<Data[]>) => {
            dispatch(actions.loadSettings(response.data));
        });
}

const loadPlotPoints = () => (dispatch: Dispatch<any>) => {
    axios.get(server + '/data/plot-points')
        .then((response: AxiosResponse<Data[]>) => {
            dispatch(actions.loadPlotPoints(response.data));
        });
}

const selectStoryType = (storyType: Data[]) => (dispatch: Dispatch<any>) => {
    dispatch(actions.selectStoryType(storyType));
}

const selectSetting = (setting: Data[]) => (dispatch: Dispatch<any>) => {
    dispatch(actions.selectSetting(setting));
}

const selectPlotPoint = (plotPoint: Data[]) => (dispatch: Dispatch<any>) => {
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