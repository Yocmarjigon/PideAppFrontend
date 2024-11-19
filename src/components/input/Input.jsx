
export const Input = ({placeholder, label, icon}) => {

  return (
    <div className=" flex flex-col w-full"  >
      <label for="username" className="text-medium-font">{label}</label>
      <div className="w-full flex flex-col relative">
        <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
          <i className={icon}></i>
        </span>
        <input
          className="outline-none border-solid border-gray-500 rounded-small border p-1 pt-2 pb-2 pl-7 text-secundari-font " type="text"
          placeholder={placeholder} />
      </div>
    </div >
  )
}