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

export default {
    loadStoryTypes,
    loadSettings,
};