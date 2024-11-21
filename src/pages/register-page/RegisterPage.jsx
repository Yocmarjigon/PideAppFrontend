
import { Link } from "react-router-dom"
import { Button } from "../../components/Buttons/Button"
import { Input } from "../../components/input/Input"

export const RegisterPage = () => {
  const registrarse = () => {
  }

  return (
    <>
      <section className="flex relative flex-col justify-center items-center w-screen h-screen p-6">
        <div className="relative after:content-['After] after:bg-red-main after:absolute after:bottom-0 after:w-full after:h-1 overflow-hidden  shadow-bg-main-shadow  max-w-96  min-w-72 h-80 rounded-lg p-2 flex flex-col items-center gap-5 ">
          <h3 className="text-medium-font text-gray-500">Inicia sesión para continuar</h3>
          <form action="" className="flex flex-col items-center w-full gap-4">
            <Input placeholder={"Ingrese su usuario"} label={"Usuario"} icon={"pi pi-user"}></Input>
            <Input placeholder={"Ingrese su contraseña"} label={"Conreaseña"} icon={"pi pi-key"}></Input>
            <Input placeholder={"Ingrese nuevamente su contraseña"} label={"Repetir contraseña"}></Input>
            <Button click={registrarse} label={"Ingresar"} ></Button>
          </form >

        </div >
      </section>
    </>
  )
}