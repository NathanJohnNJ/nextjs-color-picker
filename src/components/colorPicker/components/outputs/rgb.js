const RGB = ({color}) => {
  return (
    <div className="flex justify-center items-center w-28 text-xs
    rounded-md py-1.5 px-2 border border-slate-700 bg-slate-800 h-6">
      <span className="text-slate-500 m-1">RGB</span> 
      {color ? <span className="w-20 text-center text-slate-300 whitespace-nowrap">({color.r}, {color.g}, {color.b})</span> : <span className="w-20"></span>}
    </div>
  )
};

export default RGB;