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
        <div className="flex mt-16 w-120 flex-row  flex-shrink-0 gap-4 py-2 overflow-x-auto 
        scrollbar scrollbar-thumb-purple
          ">
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