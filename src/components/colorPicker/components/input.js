const Input = (props) => {
  const { label, onChangeHandler, id } = props;
  return (
    <div className="flex gap-1 justify-center items-center w-28 text-xs rounded-md py-1.5 px-2 border border-slate-700 bg-slate-800">
      <span className="text-slate-500 w-8 text-center">{label}</span>
      <input className="w-16 outline-none bg-transparent" onChange={onChangeHandler} id={id} />
    </div>
  )
};

export default Input;