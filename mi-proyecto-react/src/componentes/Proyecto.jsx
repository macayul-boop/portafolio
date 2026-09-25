import github from '../assets/logotipo-de-github.png'

function Proyecto({titulo, descripcion, url}){
    return(
        <article className="col-span-1 p-8 border border-gray-300 rounded-lg hover:border-black">
            <h4 className="font-bold text-lg ">{titulo}</h4>
            <p className="mt-1.5">{descripcion}</p>
            <a href={url} target="_blank" className="flex justify-end"><img src={github} alt="Logo Github" height="30px" width="30px"></img></a>
        </article>
    )
}

export default Proyecto;