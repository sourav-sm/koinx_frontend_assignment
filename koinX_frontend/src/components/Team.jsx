import React from "react";
import teamMember1 from "../Images/teamMember_1.png";
import teamMember2 from "../Images/teamMember_2.png";
import teamMember3 from "../Images/teamMember_3.png";

const Team = () => {
    return (
        <div className="ml-5 px-2  sm:grid grid-cols-10 md:px-5">
            <div className="bg-white p-5 sm:col-span-7 md:p-10 rounded-2xl mb-5">
                <h2 className="font-bold text-2xl md:text-3xl mb-7">Team</h2>
                <p className="font-medium text-base md:text-lg mb-7">Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
                {[teamMember1, teamMember2, teamMember3].map((member, index) => (
                    <div key={index} className="bg-slate-300 p-5 grid grid-cols-1 md:grid-cols-10 gap-5 bg-center mb-5 md:mb-0">
                        <div className="md:col-span-2">
                            <img className="rounded-lg mb-3 mx-auto" src={member} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                            <p className="text-md font-bold text-center">Name {index + 1}</p>
                            <p className="text-sm text-slate-500 text-center">Designation Here</p>
                        </div>
                        <p className="md:col-span-8 text-lg">Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;