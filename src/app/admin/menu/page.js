"use client"
import Image from 'next/image';
import { useState } from 'react';
import stage from "../../../images/stage.png";

export default function Menu() {
    const [menu, setMenu] = useState([
        { id: 1, m_description: 'Beer', m_price: 120, url: 'https://example.com/beer' },
        { id: 2, m_description: 'Whiskey', m_price: 300, url: 'https://example.com/whiskey' },
        { id: 3, m_description: 'Vodka', m_price: 250, url: 'https://example.com/vodka' },
        { id: 4, m_description: 'Cocktail', m_price: 180, url: 'https://example.com/cocktail' },
        { id: 5, m_description: 'Rum', m_price: 220, url: 'https://example.com/rum' },
        { id: 6, m_description: 'Rum', m_price: 220, url: 'https://example.com/rum' },
        { id: 7, m_description: 'Rum', m_price: 220, url: 'https://example.com/rum' },
        { id: 8, m_description: 'Rum', m_price: 220, url: 'https://example.com/rum' },
        { id: 9, m_description: 'Rum', m_price: 220, url: 'https://example.com/rum' },
        { id: 10, m_description: 'Rum', m_price: 220, url: 'https://example.com/rum' },
    ]);

    

    return (
        <div className="bg-background w-screen min-h-screen flex justify-center items-start p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {menu.map((item) => (
                    <div key={item.id} className="bg-secondary_main border-2 border-main rounded-lg shadow-lg p-4 w-64">
                        <Image
                            src={stage}
                            alt={item.m_description}
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-lg text-white font-bold">{item.m_description}</h3>
                            <p className="text-white mt-2">Price: ${item.m_price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
