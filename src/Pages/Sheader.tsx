import shopBackground from '../webassets/image-4-1.jpg'; 
import ShopContent from '../Mainpages/Shop'; 

function Shop() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${shopBackground})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-2">Shop</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal mt-4">Home / Shop</p>
        </div>
      </div>

      {/* Shop Content */}
      <ShopContent />
    </div>
  );
}

export default Shop;
