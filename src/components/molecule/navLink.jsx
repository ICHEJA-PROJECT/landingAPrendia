import PrimaryButton from "../atoms/button"
import LinkPrimary from "../atoms/LinkPrimary"
const NavLink = () =>{
  
    return <nav className="flex items-center gap-x-6">
        <LinkPrimary text={"Que es"}/>
         <LinkPrimary text={"Caracteristica"}/>
         <PrimaryButton text={"Me interesa"}/>
    </nav>
}

export default NavLink