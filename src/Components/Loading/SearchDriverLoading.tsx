import Lottie from "lottie-react";
import animationData from "../../assets/Animations/SearchCabLoading.json";

export default function SearchDriverLoading(){
    return(
        <>
            <div>
                <Lottie
                animationData={animationData}
                className="h-[30vh]"
            />
            </div>
        </>
    )
}