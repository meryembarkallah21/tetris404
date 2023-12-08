import create from 'zustand';
import { createGameSlice, GameSlice } from './createGameSlice';
import { createKeyboardSlice, KeyboardSlice } from './createKeyboardSlice';
import { createMatrixSlice, MatrixSlice } from './createMatrixSlice';
import { createPieceSlice, PieceSlice } from './createPieceSlice';

export type tetrisState = MatrixSlice & PieceSlice & GameSlice & KeyboardSlice;

export const useStore = create<tetrisState>()((set, get) => ({
  ...createMatrixSlice(set, get),
  ...createPieceSlice(set, get),
  ...createGameSlice(set, get),
  ...createKeyboardSlice(set, get),
}));
