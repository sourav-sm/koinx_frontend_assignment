import Heroleft from './Herleft';
import Heroright1 from './Heroright1';
import Heroright2 from './Heroright2';

const Hero = ()=>{
  return (
    <div className="sm:grid grid-cols-10 p-5 gap-5">
           <div className="col-span-7"> 
              <Heroleft/>
           </div>  
           <div className="grid col-span-3 gap-3">
             <Heroright1 />
             <Heroright2/>
           </div>
        </div>
  )
}
 export default Hero;