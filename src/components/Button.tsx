type Props = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ children, onClick }: Props) {
  return (
    <button
      className="rounded-full bg-purple p-4 z-10 hover:bg-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
