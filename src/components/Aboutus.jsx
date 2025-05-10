import { aboutitems, features } from "../constants";
import codeImg from "../assets/code.jpg";
import Collab from "../assets/Collab.jpg"
import Collab2 from "../assets/Collab2.jpg"


const Aboutus = () => {
  return (
    <div className = "mt-5">
      <section id = "Aboutus" className="py-20 bg-black-50">
    <div className="relative border-b border-neutral-800 min-h-[650px]" id="Aboutus">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          About Us
        </span>
       
      </div>
      <div className="flex flex-wrap justify-center">
   
         <div className="p-7 w-full lg:w-1/2">
                  <img src={Collab2} alt="Coding" className=" mt-7 max-w-200 max-h-150 border border-white-700 shadow-sm shadow-white-400" />
                </div>
                <div className="pt-12 w-full lg:w-1/2">
        {aboutitems.map((aboutitems, index) => (
          <div key={index} className="flex mb-12">
              <div>
                <h4 className="mt-1 text-xl">{aboutitems.title}</h4>
                <p className="text-md p-1 mb-1 text-neutral-500">
                  {aboutitems.description}
                </p>
              </div>
            
            
          </div>
        ))}
      
     </div>
    </div>
   </div>
   </section>
   </div>
    
    
 
  )
};

export default Aboutus;
