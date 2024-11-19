import { Input } from "../../components/input/Input"

export const LoginPage = () => {
  return (
    <>
      <section className="flex relative flex-col justify-center items-center w-screen h-screen p-6">
        <img src="/src/assets/images/Logo.svg" alt="logo" />
        <div className=" shadow-lg  max-w-96  min-w-72 h-80 rounded-lg p-2 flex flex-col items-center gap-5 border-0.5 border-red-main">
          <h3 className="text-medium-font text-gray-500">Inicia sesión para continuar</h3>
          <form action="" className="flex flex-col items-center w-full gap-4">
            <Input placeholder={"Ingrese su usuario"} label={"Usuario"} icon={"pi pi-user"}></Input>
            <Input placeholder={"Ingrese su contraseña"} label={"Conreaseña"} icon={"pi pi-key"}></Input>
            <button className="bg-red-main rounded-sm w-28 h-9 text-white shadow-md">Ingresar</button>
          </form >
          <a href="#" className="w-52 text-secundari-font text-center underline">¿Aun no tienes una cuenta? Registrate?</a>
        </div >
      </section >
    </>
  )
}