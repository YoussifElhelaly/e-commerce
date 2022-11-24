import { useRecoilState } from "recoil"
import light from "../../atoms/light"
import "./ModeButton.css"

function ModeBtn () {

    const [lightMode , setLightMode] = useRecoilState(light)

    return (
        <div className="mode" onClick={() => {
            document.getElementById("background").classList.toggle("active")
            let mode = !lightMode
            setLightMode(mode)
            localStorage.setItem("light_mode" , JSON.stringify(mode))
        }}>
            <i className="fa-regular fa-sun"></i>
            <i className="fa-regular fa-moon"></i>
            <div className="background" id="background"></div>
        </div>
    )
}

export default ModeBtn