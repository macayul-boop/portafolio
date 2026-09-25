
function Header(){
    return (
    <header className="w-full border-b border-b-gray-200 ">
        <nav className="max-w-3xl px-3 py-6 md:py-8 mx-auto flex justify-center gap-x-12">
            <a href="#cv" className="text-lg">Cv</a>
            <a href="#portafolio" className="text-lg">Portafolio</a>
            <a href="#contacto" className="text-lg">contacto</a>
        </nav>
    </header>
    )
}

export default Header;