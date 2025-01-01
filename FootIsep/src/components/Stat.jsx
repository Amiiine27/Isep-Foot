import "./../style/Stat.css"

function Stat({label, text}){
    return(
        <>
        <div className="stat">
            <p className="stat-label-value">{label} : </p>
            <p className="stat-text-value">{text}</p>
        </div>
        </>
    )
}

export default Stat