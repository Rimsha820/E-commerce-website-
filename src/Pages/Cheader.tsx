import shopBackground from '../webassets/image-1-1.jpg'; 
import Contact from '../Mainpages/Contact'; 

function Shop() {
  return (
    <div>
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${shopBackground})` }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative text-center">
          <h1 className="text-5xl sm:text-4xl md:text-5xl font-semibold mb-2">Contact Us</h1>
        </div>
      </div>
      <Contact /> 
    </div>
  );
}

export default Shop;
