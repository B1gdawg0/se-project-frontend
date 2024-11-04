"use client";
import { useState } from "react";
import DotDivider from "../../components/dot_divider";
import FacilityCard from "../../components/faci_card";
import { FaMusic } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { IoFootball } from "react-icons/io5";
import { GiPoolTableCorner } from "react-icons/gi";
import ShowCard from "../../components/show_card";
import Footer from "../../components/footer";
import EventModal from "../../components/EventModal";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null); // State to hold the timeout ID

  const events = [
    {
      name: "F1 Viewer Party",
      detail: "Experience the thrill of Formula 1 in style at Drink and Groove! Join us for an immersive race-day atmosphere with live streaming on big screens, high-energy ambiance, and gourmet race-inspired cocktails. Whether you're a die-hard F1 fan or just looking for an unforgettable evening, our luxurious lounge offers the perfect setting to enjoy every lap, overtake, and podium finish. Book your table now to elevate your race experience—this is F1 like you've never seen it before!",
      duration: "6 November 2024 21:00 PM",
    },
    {
      name: "Live Music Night",
      detail: "Join us for an exclusive evening as Ed Sheeran graces Drink and Groove with a surprise performance! Indulge in an unforgettable night of music, ambiance, and elegance. Secure your table now for this rare opportunity—seating is limited, and this is an event you won’t want to miss.",
      duration: "5 November 2024 21:00 PM",
    },
    {
      name: "Dart Tournament",
      detail: "Compete in our monthly dart tournament with exciting prizes.",
      duration: "Every last Saturday of the month",
    },
    {
      name: "Football Viewing Party",
      detail: "Catch all the live action of the Premier League with us!",
      duration: "Every Saturday and Sunday during the season",
    },
  ];

  const handleShowDetails = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleMouseEnter = (event) => {
    const id = setTimeout(() => handleShowDetails(event), 1000);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId); // Clear the timeout when leaving the card
  };

  const handleModalMouseEnter = () => {
    clearTimeout(timeoutId); // Clear the timeout when hovering over the modal
  };

  const handleModalMouseLeave = () => {
    setIsModalOpen(false); // Close the modal when leaving
  };

  return (
    <div className={`bg-background ${isModalOpen ? 'overflow-hidden' : ''}`}>
      <div className="w-screen relative">
        <div className="absolute bottom-[55%] left-[37%] z-10 text-white text-[10rem] pointer-events-none">DRINK</div>
        <div className="absolute bottom-[47%] left-[47%] z-20 text-main text-[10rem] pointer-events-none">&</div>
        <div className="absolute bottom-[38%] left-[33%] z-30 text-white text-[10rem] pointer-events-none"> GROOVE </div>
        <div className="bg-[url('../images/Banner.jpg')] z-0 bg-cover bg-center grayscale w-screen h-[53.3rem] transition-all ease-in-out hover:grayscale-0"></div>
      </div>
      <div className="bg-secondary_background flex flex-col items-center justify-around h-screen">
        <div>
          <div className="flex flex-row justify-center text-[4rem]">
            A TASTE OF THE COUNTRYSIDE
          </div>
          <div className="flex flex-row justify-center text-[4rem]">
            IN THE HEART OF THE CITY
          </div>
        </div>
        <DotDivider />
        <div>
          <div className="flex flex-row justify-center text-[2rem]">
            Over all these long years we have been accumulating only the best brewing traditions and recipes.
          </div>
          <div className="flex flex-row justify-center text-[2rem]">
            We keep surprising our customers and ourselves. Turns out nothing tastes as good as our beer!
          </div>
        </div>
        <DotDivider />
        <div className="flex flex-row justify-around w-screen">
          <FacilityCard icons={<FaMusic />} topic={"Live Music"} detail={"A lot of beer, friends, cool music, and fun with the best rock bands of the town."} />
          <FacilityCard icons={<TbTargetArrow />} topic={"Throwing Dart"} detail={"Take part in our darts competitions among the bravest regulars of the pub."} />
          <FacilityCard icons={<IoFootball />} topic={"Live Sport"} detail={"Enjoy watching live sport events in a friendly atmosphere with a pint of beer."} />
          <FacilityCard icons={<GiPoolTableCorner />} topic={"Pool Table"} detail={"Your friendly gathering place to enjoy playing pool table and relaxing with friends."} />
        </div>
      </div>
      <div className="h-screen bg-background">
        <div className="flex flex-col items-center justify-around h-full">
          <div className="text-white text-[4rem]">UPCOMING EVENTS</div>
          {events.map((event, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => handleMouseEnter(event)} // Show modal on hover with delay
              onMouseLeave={handleMouseLeave} // Clear timeout when leaving the card
            >
              <ShowCard 
                name={event.name} 
                desc={event.detail} // Static button text
                time={event.duration} 
                link={event.link}
                className="hover:cursor-pointer" // Make cursor a pointer on hover
              />
            </div>
          ))}
          {isModalOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out" // Darker modal overlay
              onMouseEnter={handleModalMouseEnter} // Clear timeout when hovering over the modal
              onMouseLeave={handleModalMouseLeave} // Close the modal when leaving
            >
              <div className="bg-white rounded-lg shadow-lg p-5 max-w-md w-full opacity-100 transform transition-all duration-300 ease-in-out" // Modal styling with smooth transition
                   style={{ opacity: isModalOpen ? 1 : 0, transform: isModalOpen ? 'scale(1)' : 'scale(0.9)' }} // Scale effect
              >
                <EventModal event={selectedEvent} onClose={() => setIsModalOpen(false)} />
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
