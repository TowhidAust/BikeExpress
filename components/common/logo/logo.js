import router from "next/router";
import { RiMotorbikeLine } from "react-icons/ri";

export default function Logo() {
    return (
        <div className="logo-root">
            <div className="logo-name" onClick={()=>{router.push('/')}}>
                Bike <RiMotorbikeLine color="red"/> Hub 
            </div>
        </div>
    )
}
