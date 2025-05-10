import { products } from "../constants";

const Ourproducts = () => {
  return (
    <div className= "mt-5">
      <section id = "productsection" className = "py-20 bg-black-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase mt-6">
            Our Products
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div key={index} className="bg-black-50 rounded-lg overflow-hidden">
              <div className="relative h-50 w-full bg-black-100">
                <img className="h-78 w-full object-contain" src={product.image || "/placeholder.svg"} alt={product.name} />
              </div>
              <div className="p-6">
                <h3 className="mt-1 mb-6 text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-black-100 border border-orange-700 shadow-sm shadow-orange-700 text-white-800 text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}

export default Ourproducts;