import './../style/ProfilField.css'

function ProfilField({text, label}){

    return (

        <>
        <div className="field">
            <p className="label-value">{label}</p>
            <p className="text-value">{text}</p>
        </div>
        </>
    )
}

export default ProfilField