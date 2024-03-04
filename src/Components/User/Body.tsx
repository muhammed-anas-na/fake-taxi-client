import { Button } from "@material-tailwind/react";
import img1 from '../../assets/home-img1.png'
import img2 from '../../assets/home-img2.jpg'

export default function Body(){
    return(
        <div className="px-8 sm:p-10 sm:px-32">
            <div className="mb-10 sm:flex sm:gap-16 items-center">
                <img src={img1} alt="banner-image" className="mb-3" />

                <div className="flex flex-col sm:gap-5 gap-3">
                    <h1 className="sm:text-5xl font-bold text-black">Drive when you want, make what you need</h1>
                    <p>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
                    <div className="sm:flex sm:items-center sm:gap-5">
                        <Button>Get started</Button>
                        <h2>Already have an account?</h2>
                    </div>
                </div>
            </div>

            <div className="sm:flex sm:gap-16 items-center flex flex-col-reverse sm:flex-row">
                <div className="flex flex-col sm:gap-5 gap-3">
                    <h1 className="sm:text-4xl font-bold text-black">Make money by renting out your car</h1>
                    <p>Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.</p>
                    <div className="sm:flex sm:items-center sm:gap-5">
                        <Button>Get started</Button>
                        <h2>Already have an account?</h2>
                    </div>
                </div>
                <img src={img2} alt="banner-image" className="mb-3" />
            </div>

        </div>
    )
}