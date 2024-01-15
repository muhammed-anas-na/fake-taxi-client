import Header from './Header';
import Footer from './Footer'
import './Home.css'

export default function Home() {
  return (
    <>
    <div className="bg-hero h-svh">
      <Header/>

      <div className='flex px-56 items-center mt-20'>
        <div>
          <h1 className='font-bold text-6xl'>Easy and fast way to move</h1>
          <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
          <button type="button" className="font-extrabold mt-5 text-white bg-base-yellow hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">BOOK A CAB</button>
        </div>
        <div>
          <img id='hero' src={'/hero-image.png'} width={900} height={800} alt='image' />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

