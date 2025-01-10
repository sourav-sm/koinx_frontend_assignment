import heroright from "../Images/heroright.png"
import { IoIosArrowRoundForward } from "react-icons/io";

const Heroright1=()=>{
    return (
        <div className="flex justify-center items-center ">
           <div className="bg-blue-600 text-white p-10 text-center rounded-2xl">
             <div className="text-3xl font-semibold mb-3">Get Started with KoinX for Free</div>
             <div className="mb-3 text-lg font-medium">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports</div>
             <img className="mx-auto mb-3" src={heroright} alt="" />
             <button className="flex items-center text-xl font-semibold bg-white text-black mx-auto px-6 py-3 rounded-lg hover:bg-gray-200 transition">
               Get Started for FREE
            <IoIosArrowRoundForward className="ml-1" />
        </button>
           </div>
        </div>
    )
}
export default Heroright1;