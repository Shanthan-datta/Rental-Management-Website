import { products } from "../constants"
import PopularProductCard from '../components/PopularProductCard';

const PopularProducts = () => {
  return (
    <div>
      <section id="products"
       className="max-container max-sm:mt-12
       ">
        <div className="flex flex-col
        justify-start gap-5">
          <h2 className="text-4xl font-palanquin
          font-bold">Available 
          <span className="text-purple-800">Flats </span>
          </h2>
          <p2 className="lg:max-w-lg mt-2 
          font-montserrat text-black">Unlock exceptional property management with our premier rental services.Explore a world of convenience, expertise, and value in every lease.
          </p2>


        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3
        sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((product)=>(
            <PopularProductCard key={product.name}
            {...product}/>
          ))}


        </div>

      </section>

    </div>
  )
}

export default PopularProducts