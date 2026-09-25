function InputTexto(label, placeholder, value, onChange, error){
    return(
        <div className="flex flex-col">
            <label className="mb-2.5">{label}</label>
            <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="border border-gray-300 rounded-lg py-2 px-4"></input>
            {error && <span className="text-red-500">{error}</span>}
        </div>
    )
}

export default InputTexto