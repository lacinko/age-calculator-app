import { useReducer } from "react";
import InputSection from "./components/InputSection";
import { InputAction, InputActionEnum, InputState } from "./types";
import Button from "./components/Button";
import DisplayScreen from "./components/DisplayScreen";
import { isLeapYear } from "./utils";

function App() {
  function inputReducer(state: InputState, action: InputAction) {
    switch (action.type) {
      case InputActionEnum.ONCHANGE:
        return {
          ...state,
          animateCSS: "",
          [action.payload!.name]: action.payload!.input,
        };
      case InputActionEnum.ONSUBMIT:
        const { day, month, year } = state;

        if (
          (+month === 2 && +day > 29 && isLeapYear(+year)) ||
          (+month === 2 && +day > 28 && !isLeapYear(+year))
        ) {
          const errorMsg = `February only has ${
            isLeapYear(+year) ? 29 : 28
          } days`;

          return {
            ...state,
            isEmpty: {
              day: false,
              month: false,
              year: false,
            },
            ErrorMessage: errorMsg,
          };
        }

        if (day === "" || month === "" || year === "") {
          return {
            ...state,
            ErrorMessage: "",
            isEmpty: {
              day: day === "",
              month: month === "",
              year: year === "",
            },
          };
        }

        const today = new Date();
        const birthDate = new Date(+year, +month - 1, +day);

        if (+year < 100) {
          birthDate.setFullYear(+year);
        }

        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();
        let result;

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
          result = {
            day: dayDiff + 30,
            month: monthDiff + 12,
            year: age - 1,
          };
        } else {
          result = {
            day: dayDiff < 0 ? dayDiff + 30 : dayDiff,
            month: dayDiff < 0 ? monthDiff - 1 : monthDiff,
            year: age,
          };
        }
        return {
          ...state,
          ErrorMessage: "",
          animateCSS: "animate__bounceInDown",
          isEmpty: {
            day: false,
            month: false,
            year: false,
          },
          result: result,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(inputReducer, {
    day: "",
    month: "",
    year: "",
    result: {
      day: "--",
      month: "--",
      year: "--",
    },
    ErrorMessage: "",
    isEmpty: {
      day: false,
      month: false,
      year: false,
    },
    animateCSS: "",
  });

  return (
    <div className="px-4 grid place-items-center h-screen bg-off-white">
      <div className="mx-8 container px-6 py-12 box-border rounded-3xl rounded-br-[8rem] bg-white max-w-2xl">
        <InputSection state={state} dispatch={dispatch} />
        <div className="relative flex flex-col items-center md:items-end">
          <Button
            onClick={() => {
              dispatch({
                type: InputActionEnum.ONSUBMIT,
              });
            }}
          >
            <img src="./icon-arrow.svg" alt="icon-arrow" className="h-6" />
          </Button>
          <hr className="absolute self-stretch bg-light-grey w-full bottom-1/2 h-[2px]" />
        </div>
        <DisplayScreen result={state.result} animateCSS={state.animateCSS} />
      </div>
    </div>
  );
}

export default App;
