import { useState } from 'react';
// import Bus from '../Bus/Bus';

function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    const index = selectedSeats.indexOf(seat);
    if (index === -1) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    }
  };

  // Example: Generate seats for three rows
  const rows = ['A', 'B', 'C','D','E','F','G','H'];
  const seatsPerRow = 4;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Select your seat</h1>
      <div className="flex flex-col items-center">
        {rows.map((row) => (
          <div key={row} className="flex mb-4">
            {Array.from({ length: seatsPerRow }, (_, index) => {
              const seatNumber = index + 1;
              const seatId = `${row}${seatNumber}`;
              const isSelected = selectedSeats.includes(seatId);
              const seatStyles = isSelected
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200';
              return (
                <div
                  key={seatId}
                  className={`w-10 h-10 border rounded-full flex items-center justify-center mx-2 cursor-pointer ${seatStyles}`}
                  onClick={() => handleSeatClick(seatId)}
                >
                  {seatId}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-sm">Selected seats: {selectedSeats}</p>
      </div>
      {/* <Bus selectedSeats={selectedSeats} /> */}
    </div>
  );
}

export default SeatSelection;
