import PrimaryButton from "../atoms/button"
import LinkPrimary from "../atoms/LinkPrimary"

const NavLink = () => {
    const handleMeInteresa = () => {
        // Scroll directo y rápido a la sección final
        const element = document.getElementById('me-interesa')
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return <nav className="flex items-center gap-x-6">
        <LinkPrimary text={"Que es?"} url="#que-es" />
        <LinkPrimary text={"Caracteristicas"} url="#caracteristicas" />
        <PrimaryButton text={"Me interesa"} onClick={handleMeInteresa} />
    </nav>
}

export default NavLink