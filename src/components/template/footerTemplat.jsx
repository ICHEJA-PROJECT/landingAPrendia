import up from "../../../public/img/UP.png"
import secretaria from "../../../public/img/secretaria.png"
const Footer = () => {
  
    return <footer className="bg-green-ia w-full mt-7 py-4 px-16">
      <p className="w-full text-white text-center font-semibold text-3xl">Equipo de desarrollo</p>

      <section className="w-full justify-between flex mt-10">
        <img src={up} alt="" className="w-96" />
        <img src={secretaria} alt="" className="w-96" />
      </section>
    </footer>
}
export default Footer