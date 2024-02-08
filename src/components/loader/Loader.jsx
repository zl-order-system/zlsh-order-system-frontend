import "../loader/loader.css"
function Loader({ state }){
    if (state == "close") return null
    return (
        <div className="absolute left-[50%] top-[50%] block translate-x-[-50%] translate-y-[-50%] z-50">
            <div className="loader2"></div>
        </div>
    )
}
export default Loader