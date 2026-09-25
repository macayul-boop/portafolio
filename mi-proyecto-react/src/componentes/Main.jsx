import Proyecto from "./Proyecto";


function Main(){
    return (
        <>
            <main className="w-full">

                <section id="cv" className="max-w-4xl mx-auto mt-15 px-4">
                    <h1 className="font-bold font-sans text-3xl text-gray-950 text-center md:text-left">Matias Igancio Cayul Palavecino</h1>
                    <p className="mt-0.5 text-lg font-normal text-gray-500 text-center md:text-left">Santiago, Chile</p>
                    <p className="mt-2.5 text-slate-800 text-lg text-center md:text-left">
                        Estudiante de Ingeniería en Informática en Duoc UC con formación en desarrollo de 
                        software. Busco una oportunidad laboral para aplicar mis conocimientos técnicos y 
                        seguir desarrollándome en el área de TI.
                    </p>
                </section>

                <section className="max-w-4xl mx-auto grid grid-cols-1 px-4 mt-8 md:grid-cols-3 gap-6 pb-8 border-b border-b-gray-300">
                    <section className="col-span-1 ">
                        <h2 className="py-2 border-b border-b-gray-300 text-2xl font-bold text-gray-950">Aptitudes</h2>
                        <div className="mt-4 flex flex-wrap gap-x-1 gap-y-2">
                            <span className="px-3 py-1 bg-gray-200 rounded-2xl">SQL</span>
                            <span className="px-3 py-1 bg-gray-200 rounded-2xl">Git/Github</span>
                            <span className="px-3 py-1 bg-gray-200 rounded-2xl">Java</span>
                            <span className="px-3 py-1 bg-gray-200 rounded-2xl">Desarrollo Backend</span>
                        </div>
                    </section>
                    <section className="col-span-1 md:col-span-2">
                        <h3 className="py-2 border-b border-b-gray-300 text-2xl font-bold text-gray-950 mb-4">Formacion Academica</h3>
                        <article className=" mb-3">
                            <h3 className="font-semibold text-lg">Duoc UC</h3>
                            <div className="flex gap-2">
                                <p className="text-slate-800">Educacion superior: Ingenieria en Informtica</p>
                                <p className="text-gray-700">2026</p>
                            </div>
                        </article>
                        <article className=" mb-3">
                            <h3 className="font-semibold text-lg">Alberto Blest Gana</h3>
                            <div className="flex gap-2">
                                <p className="text-slate-800">Educacion enseñansa media</p>
                                <p className="text-gray-700">2020-2024</p>
                            </div>
                        </article>
                        <article className=" mb-3">
                            <h3 className="font-semibold text-lg">Alberto Blest Gana</h3>
                            <div className="flex gap-2">
                                <p className="text-slate-800">Educacion enseñansa basica</p>
                                <p className="text-gray-700">2012-2020</p>
                            </div>
                        </article>
                    </section>
                </section>

                <section id="portafolio" className="max-w-4xl mx-auto mt-10 mb-20 px-4 ">
                    <h2 className="text-2xl font-bold mb-4">Proyectos Destacados</h2>
                    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Proyecto 
                            titulo={"Fullstack 1"} 
                            descripcion={"Se trata de un backend para gestionar de manera integral diferentes modulos de un cine."}
                            url={"https://github.com/macayul-boop/sistema-cine"}
                        />
                    </section>
                </section>

                <section id="contacto" className="max-w-4xl mx-auto py-16 px-4 border-t border-t-gray-300">
                        <h2 className="text-4xl font-bold mb-4 text-center">Contacto</h2>
                        <p className="text-lg text-gray-600 text-center">¿Tienes un proyecto en mente? Envíame un mensaje directo.</p>
                        <form className="w-full p-8 mt-12 border border-gray-300 rounded-2xl ">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                                <div className="flex flex-col">
                                    <label className="mb-2.5">Nombre</label>
                                    <input type="text" placeholder="Nombre" className="border border-gray-300 rounded-lg py-2 px-4"></input>
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-2.5">Email</label>
                                    <input type="text" placeholder="tu@email.com" className="border border-gray-300 rounded-lg py-2 px-4"></input>
                                </div>
                            </div>
                            <div className="flex flex-col mb-10">
                                <label className="mb-2.5">Mensaje</label>
                                <textarea placeholder="Mensaje" className="border border-gray-300 rounded-lg py-2 px-4 resize-none min-h-50"></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-blue-700 px-8 py-4 rounded-4xl text-white font-semibold hover:bg-blue-800">Enviar Mensaje</button>
                            </div>
                        </form>
                </section>

            </main>
    </>
    )
}

export default Main;