import { create } from "zustand";

interface State {
  isOpen: boolean;
}

type Action = {
  updateIsOpen: (firstName: State["isOpen"]) => void;
};

export const useStore = create<State & Action>(set => ({
  isOpen: false,
  updateIsOpen: isOpen => set(() => ({ isOpen: isOpen })),
}));

interface ModalState {
  interacting: boolean;
}

interface ModalActions {
  updateInteracting: (firstName: State["isOpen"]) => void;
}

export const useInteractingStore = create<ModalState & ModalActions>(set => ({
  interacting: false,
  updateInteracting: interacting => set(() => ({ interacting: interacting })),
}));

interface DataModalState {
  reading: boolean;
}

interface DataModalActions {
  updateReading: (firstName: State["isOpen"]) => void;
}

export const useReadingStore = create<DataModalState & DataModalActions>(set => ({
  reading: false,
  updateReading: reading => set(() => ({ reading: reading })),
}));
