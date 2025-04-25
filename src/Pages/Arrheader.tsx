import shopBackground from '../webassets/image-4-1.jpg'; 
import NewArrival from '../Mainpages/Arrival'; 

function Shop() {
  return (
    <div>
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${shopBackground})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-2">New Arrivals</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal mt-4">Home / Products / New Arrivals</p>
        </div>
      </div>
      <NewArrival /> 
    </div>
  );
}

export default Shop;
