export const Button = ({label, click})=>{
  
  return(
    <>
    <button onClick={click()} className="bg-red-main rounded-sm w-28 h-9 text-white shadow-md">{label}</button>
    </>
  )
}