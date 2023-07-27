import InputElement from "./InputElement";
import { InputAction, InputActionEnum, InputState } from "../types";

type Props = {
  state: InputState;
  dispatch: React.Dispatch<InputAction>;
};

function InputSection({ state, dispatch }: Props) {
  const { day, month, year, isEmpty, ErrorMessage } = state;
  function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const input = value;

    if (isNaN(+input)) return;

    if (name === "day" && (+input < 0 || +input > 31 || input.length > 2))
      return;
    if (name === "month" && (+input < 0 || +input > 12 || input.length > 2))
      return;
    if (name === "year" && (+input < 0 || +input > 2023 || input.length > 4))
      return;

    dispatch({
      type: InputActionEnum.ONCHANGE,
      payload: {
        name: name,
        input: input,
      },
    });
  }

  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    dispatch({
      type: InputActionEnum.ONSUBMIT,
    });
  }
  return (
    <div className="flex gap-8 pb-10 md:pr-28">
      <InputElement
        inputName="day"
        handleInputOnChange={handleInputOnChange}
        handleOnKeyDown={handleOnKeyDown}
        inputValue={day}
        placeholderValue="DD"
        isEmpty={isEmpty.day}
        ErrorMessage={ErrorMessage}
      />
      <InputElement
        inputName="month"
        handleInputOnChange={handleInputOnChange}
        handleOnKeyDown={handleOnKeyDown}
        inputValue={month}
        placeholderValue="MM"
        isEmpty={isEmpty.month}
      />
      <InputElement
        inputName="year"
        handleInputOnChange={handleInputOnChange}
        handleOnKeyDown={handleOnKeyDown}
        inputValue={year}
        placeholderValue="YYYY"
        isEmpty={isEmpty.year}
      />
    </div>
  );
}

export default InputSection;
