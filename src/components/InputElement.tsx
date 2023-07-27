type Props = {
  inputName: string;
  handleInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: number | string;
  placeholderValue: string;
  isEmpty: boolean;
  ErrorMessage?: string;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

function InputElement({
  inputName,
  handleInputOnChange,
  inputValue,
  placeholderValue,
  isEmpty,
  ErrorMessage,
  handleOnKeyDown,
}: Props) {
  const errorMsg = "This field is required";
  const borderStyle = isEmpty ? "border-light-red" : "border-off-white";
  const labelStyle = isEmpty ? "text-light-red" : "text-smokey-grey";
  return (
    <div className="flex flex-col">
      <label
        htmlFor=""
        className={`uppercase tracking-widest ${labelStyle} font-bold text-sm pb-1`}
      >
        {inputName}
      </label>
      <input
        className={`${borderStyle} border-2 w-full text-lg placeholder:text-base font-bold py-2 px-4 rounded-lg md:text-2xl md:placeholder:text-2xl`}
        type="text"
        placeholder={placeholderValue}
        name={inputName}
        onChange={handleInputOnChange}
        onKeyDown={handleOnKeyDown}
        value={inputValue}
      />
      {isEmpty && (
        <p className="w-full text-xs text-light-red pt-2 ">{errorMsg}</p>
      )}
      {ErrorMessage && (
        <p className="w-full text-xs text-light-red pt-2 ">{ErrorMessage}</p>
      )}
    </div>
  );
}

export default InputElement;
