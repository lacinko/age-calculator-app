type Props = {
  result: {
    day: number | string;
    month: number | string;
    year: number | string;
  };
  animateCSS: string;
};

function DisplayScreen({ result, animateCSS }: Props) {
  const { day, month, year } = result;
  function addSuffix(num: number) {
    return num === 1 ? "" : "s";
  }

  return (
    <div className="pt-6 md:pt-2">
      <p
        className={`font-extrabold text-5xl md:text-7xl italic animate__animated ${animateCSS}`}
      >
        <span className="text-purple">{year}</span> year{addSuffix(+year)}
      </p>
      <p
        className={`font-extrabold text-5xl md:text-7xl italic animate__animated animate__faster ${animateCSS}`}
      >
        <span className="text-purple">{month}</span> month{addSuffix(+month)}
      </p>
      <p
        className={`font-extrabold text-5xl md:text-7xl italic animate__animated animate__fast ${animateCSS}`}
      >
        <span className="text-purple">{day}</span> day{addSuffix(+day)}
      </p>
    </div>
  );
}

export default DisplayScreen;
