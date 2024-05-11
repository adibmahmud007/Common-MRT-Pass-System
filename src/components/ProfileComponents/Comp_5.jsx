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
        <div className="w-full h-[715px] bg-zinc-300 text-black pt-4">
            <h1 className="text-3xl pb-4 text-center font-bold">Your Journey History</h1>
          <div className="max-h-[650px] overflow-y-auto">
            <table className="border border-black">
                <thead className="border border-black">
                  <tr className="border border-black" >
                    <th className="px-2 border border-black">Transport Name</th>
                    <th className="px-2 border border-black">Source</th>
                    <th className="px-2 border border-black">Destination</th>
                    <th className="px-2 border border-black">Passengers</th>
                    <th className="px-2 border border-black">Transport Medium</th>
                    <th className="px-2 border border-black">Cabin Type</th>
                    <th className="px-2 border border-black">Fare</th>
                    <th className="px-2 border border-black">Payment Time</th>
                  </tr>
                </thead>
                <tbody className="border border-black">
                  {Array.isArray(journeys) && journeys.length > 0 ? (
                    journeys.map(journey => (
                      <tr className="border border-black" key={journey.id}>
                        <td className="px-2 border border-black">{journey.transportName}</td>
                        <td className="px-2 border border-black">{journey.originStation}</td>
                        <td className="px-2 border border-black">{journey.destinationStation}</td>
                        <td className="px-2 border border-black">{journey.numOfPassenger}</td>
                        <td className="px-2 border border-black">{journey.transportMedium}</td>
                        <td className="px-2 border border-black">{journey.cabinType}</td>
                        <td className="px-2 border border-black">{journey.fare}</td>
                        <td className="px-2 border border-black">{journey.createdAt}</td>
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