import { useState, useEffect } from "react";
import axios from "axios";

const Comp_5 = () => {

    const [journeys, setJourneys] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/fare/payhistory", { withCredentials: true })
            .then(res => {
                setJourneys(res.data.data);
                console.log(res.data.data);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
    }, []);

    const handleHistory=()=>{
      axios.delete("http://localhost:8000/api/v1/fare/payhistory/delete", { withCredentials: true })
      .then(res => {
          setJourneys(res.data.data);
          console.log(res.data.data);
      })
      .catch(error => {
          console.error('Error fetching :', error);
      });
    }
    
    return (
        <div className="w-full h-[715px] profile_bg text-white pt- px-1 md:pl-10">
            <h1 className="text-3xl pb-4 text-center font-bold">Your Journey History</h1>
          <div className="max-h-[650px] backdrop-blur-lg overflow-y-hidden">
            <table className="border border-white">
                <thead className="border border-white">
                  <tr className="border border-white" >
                    <th className="px-2 border border-white">Transport Name</th>
                    <th className="px-2 border border-white">Source</th>
                    <th className="px-2 border border-white">Destination</th>
                    <th className="px-2 border border-white">Passengers</th>
                    <th className="px-2 border border-white">Transport Medium</th>
                    <th className="px-2 border border-white">Cabin Type</th>
                    <th className="px-2 border border-white">Fare</th>
                    <th className="px-2 border border-white">Payment Time</th>
                  </tr>
                </thead>
                <tbody className="border border-white">
                  {Array.isArray(journeys) && journeys.length > 0 ? (
                    journeys.map(journey => (
                      <tr className="border border-white" key={journey.id}>
                        <td className="px-2 border border-white">{journey.transportName}</td>
                        <td className="px-2 border border-white">{journey.originStation}</td>
                        <td className="px-2 border border-white">{journey.destinationStation}</td>
                        <td className="px-2 border border-white">{journey.numOfPassenger}</td>
                        <td className="px-2 border border-white">{journey.transportMedium}</td>
                        <td className="px-2 border border-white">{journey.cabinType}</td>
                        <td className="px-2 border border-white">{journey.fare}</td>
                        <td className="px-2 border border-white">{journey.createdAt}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center py-4">No journey history available</td>
                    </tr>
                  )}
                </tbody>
              </table>
      
           </div>
                  
            <section className="text-center mt-3">
            <div onClick={handleHistory} className="">
           <button className="bg-red-500 rounded-2xl ml-2 px-8 text-lg font-semibold py-1" >Clear History</button>
           </div>
            </section>
           
        </div>
    );
};

export default Comp_5;