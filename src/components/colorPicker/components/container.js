const Container = ({children}) => {
  return(
    <div className="rounded-xl w-56 h-56 bg-slate-900 border border-slate-900 absolute mt-2 left-1/2 -translate-x-1/2 p-4 text-white">
      <div className="absolute top-0 -translate-y-1.5 left-1/2 -translate-x-1/2 border-b-[8px] border-b-slate-900 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent" />
      {children}
    </div>
  )
}

export default Container;