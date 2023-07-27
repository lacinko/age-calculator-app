export enum InputActionEnum {
  ONCHANGE = "ONCHANGE",
  ONSUBMIT = "ONSUBMIT",
}

export interface InputAction {
  type: InputActionEnum;
  payload?: {
    name: string;
    input: number | string;
  };
}

export interface InputState {
  day: number | string;
  month: number | string;
  year: number | string;
  result: {
    day: number | string;
    month: number | string;
    year: number | string;
  };
  ErrorMessage: string;
  isEmpty: {
    day: boolean;
    month: boolean;
    year: boolean;
  };
  animateCSS: string;
}
