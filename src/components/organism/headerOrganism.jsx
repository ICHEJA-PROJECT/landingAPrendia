import logoApr from "../../../public/img/LogoApren.png"
import NavLink from "../molecule/navLink"
const Header = () => {

    return <nav className="w-full flex items-center flex-row px-8 pt-1 pb-2 justify-between border-[#6B7280] border-b fixed top-0 left-0 bg-white z-50">
        <section className="flex flex-row items-center ">
            <img src={logoApr} alt="" className="w-30 h-26"/>
            <h1 className="flex font-bold text-3xl">APREND<p className="text-pink-ia">IA</p></h1>
        </section>

       <NavLink/>
    </nav>
}
export default Header