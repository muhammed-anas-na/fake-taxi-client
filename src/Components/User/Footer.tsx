export default function Footer() {
  return (
    <div className="bg-footer-bg h-svh flex justify-end items-end space-x-20 space-y-20 px-20 pb-20">
      <div>
        <img
          className="mb-32"
          src={"/logo-main.webp"}
          alt="logo-image"
          height={60}
          width={160}
        />
      </div>
      <div className="text-white text-lg">
        <ul>
          <li>Book a cab</li>
          <li>Drive with us</li>
          <li>Outstations</li>
          <li>Rentals</li>
          <li>CarrGo money</li>
          <li>Corparate</li>
        </ul>
      </div>
      <div className="text-white text-lg pb-8">
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>Support</li>
          <li>Carrer</li>
          <li>Media center</li>
        </ul>
      </div>

      <div className="text-white text-lg pb-28">
        <ul>
          <li>Reserve</li>
          <li>Cities</li>
        </ul>
      </div>
    </div>
  );
}
