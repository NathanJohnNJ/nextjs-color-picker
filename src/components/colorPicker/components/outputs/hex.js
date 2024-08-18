const Hex = ({color}) => {
  return (
    <div className="flex justify-center items-center w-28 text-xs
    rounded-md py-1.5 px-1 border border-slate-700 bg-slate-800 h-6">
      <span className="text-slate-500 mr-2">HEX</span> 
      <span className="w-20 text-center text-slate-300">{color}</span>
    </div>
  )
};

export default Hex;