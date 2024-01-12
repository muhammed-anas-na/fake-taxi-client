import {useState , lazy , Suspense} from 'react';


const Tripspage = lazy(()=> import('./ProfileComponents/TripsPage'))
const Rewardspage = lazy(()=> import('./ProfileComponents/RewardPage'))
const Walletpage = lazy(()=> import('./ProfileComponents/WalletPage'));
const Settingspage = lazy(()=>import('./ProfileComponents/Settings'))
const Profilepage  = lazy(()=>import('./ProfileComponents/ProfilePage'))


export default function UserProfile(){

    const [open,setOpen] = useState(true)
    const [current,setCurrent] = useState("profile")


    return(
        <div className='flex'>
            <div className={`${open? "w-72":"w-20"} h-screen bg-base-yellow relative p-5 pt-8 duration-500`}>
                <img
                className={`absolute cursor-pointer rounded-full -right-3 top-9 w-8 ${!open && "rotate-180"}`}
                onClick={()=>{setOpen(!open)}}
                src={'/control.png'} alt="close" width={120} height={40}/>

                <div className='flex gap-x-4 items-center'>
                <img
                className={`cursor-pointer rounded-full -right-3 top-9 w-13`}
                onClick={()=>{setOpen(!open)}}
                src={'/logo-main.webp'} alt="close" width={120} height={40}/>

                </div>

                <ul className='pt-10'>
                    <li className={`text-black text-sm gap-x-4 cursor-pointer hover:bg-gray-200 rounded-md flex items-center p-3`} onClick={()=>{setCurrent("profile")}}>
                        <img className={`w-9`} src={'/user.png'} alt='user' height={20} width={30}/>
                        <span className={`${!open &&  'hidden'} origin-left duration-300`}>Profile</span>
                    </li>

                    <li className={`text-black text-sm gap-x-4 cursor-pointer hover:bg-gray-200 rounded-md flex items-center p-3`} onClick={()=>{setCurrent("trips")}}>
                        <img className='w-9' src={'/route.png'} alt='user' height={20} width={30}/>
                        <span className={`${!open &&  'hidden'} origin-left duration-300`}>Trips</span>
                    </li>

                    <li className={`text-black text-sm gap-x-4 cursor-pointer hover:bg-gray-200 rounded-md flex items-center p-3`} onClick={()=>{setCurrent("rewards")}}>
                        <img className='w-9' src={'/badge.png'} alt='user' height={20} width={30}/>
                        <span className={`${!open &&  'hidden'} origin-left duration-300`}>Rewards</span>
                    </li>

                    <li className={`text-black text-sm gap-x-4 cursor-pointer hover:bg-gray-200 rounded-md flex items-center p-3`} onClick={()=>{setCurrent("wallet")}}>
                        <img className='w-9' src={'/wallet.png'} alt='user' height={20} width={30}/>
                        <span className={`${!open &&  'hidden'} origin-left duration-300`}>Wallet</span>
                    </li>

                    <li className={`text-black text-sm gap-x-4 cursor-pointer hover:bg-gray-200 rounded-md flex items-center p-3`} onClick={()=>{setCurrent("settings")}}>
                        <img className='w-9' src={'/setting.png'} alt='user' height={20} width={30}/>
                        <span className={`${!open &&  'hidden'} origin-left duration-300`}>Settings</span>
                    </li>

                </ul>

            </div>

            <div className='p-10'>
                <Suspense fallback={<h1>Lodaing...</h1>}>
                    {current == 'profile'?<Profilepage/>:""}
                    {current == 'trips'?<Tripspage/>:""}
                    {current == 'rewards'?<Rewardspage/>:""}
                    {current == 'wallet'?<Walletpage/>:""}
                    {current == 'settings'?<Settingspage/>:""}
                </Suspense>
            </div>
        </div>
    )
}