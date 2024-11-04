// EventModal.js
import React from 'react';

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"> {/* Darker overlay */}
      <div className="flex flex-col max-w-3xl mx-auto p-8 bg-background rounded-lg shadow-xl border-main border-2"> {/* Dark background for modal */}
        <header className="text-center mb-6">
          <h1 className="text-5xl font-extrabold text-main">{event.name}</h1> {/* Larger and bolder title */}
          <h2 className="text-3xl text-gray-300 font-light">At the Exclusive High-Class Bar</h2> {/* Lighter text color */}
        </header>
        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-200">Event Details</h3> {/* Larger section title */}
          <p className="text-gray-400 text-lg">{event.detail}</p> {/* Lighter text color and larger font */}
        </section>
        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-200">Event Information</h3> {/* Larger section title */}
          <ul className="list-disc pl-6 text-gray-400 text-lg"> {/* Lighter text color and larger font */}
            <li><strong className="text-gray-300">Date:</strong> {event.duration}</li> {/* Lighter text color */}
            <li><strong className="text-gray-300">Time:</strong> 7:00 PM - 11:00 PM</li> {/* Lighter text color */}
            <li><strong className="text-gray-300">Location:</strong> KASETSART UNIVERSITY</li> {/* Lighter text color */}
          </ul>
        </section>
        <footer className="text-center mt-8">
          <button 
            onClick={onClose} 
            className="mt-4 bg-red-700 text-white text-lg px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 ease-in-out shadow-md"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}
