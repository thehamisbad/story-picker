import { DataState } from "./data/interface";
import { RandomSelectionState } from "./randomize/interface";

export interface GlobalState {
    data: DataState;
    random: RandomSelectionState;
}