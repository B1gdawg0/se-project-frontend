'use client';
import { MousePointerClick, ArrowBigLeft } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import beer from "../../images/beer.png";
import { useRouter } from 'next/navigation';
import {GetMenu} from "../../hook/menu"
import { CheckUserToken } from '../../../utils/token';

function ChooseZone({zones}) {
    const [isButtonVisible, setButtonVisible] = useState(true);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isConfirmCardVisible, setConfirmCardVisible] = useState(0);
    const [zone, setZone] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [discountApplied, setDiscountApplied] = useState(false);
    const [menu, setMenu] = useState(null)
    const router = useRouter();

    const handleApplyDiscount = () => {
        setDiscountApplied(true);
    };

    const handleSelect = (item) => {
        setSelectedItem(item);
    };

    const handleToggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    useEffect(()=>{
        
        const fetchMenu = async()=>{
            const res = await GetMenu()

            if(res.status === 200){
                setMenu(res.data.payload.menus)
            }
        }

        if(CheckUserToken()){
            fetchMenu();
        }
    },[])

    const handleZoneClick = (zone) => {
        if (zones[zone]['t_status'] === 'A') {
            setZone(zone);
            setButtonVisible(false);
            setDropdownVisible(false);
            setConfirmCardVisible(1);
        }
    };

    const closeConfirmCard = () => {
        setZone(null);
        setButtonVisible(true);
        setDropdownVisible(true);
        setConfirmCardVisible(0);
        setSelectedItem(null)
    };

    return (
        <div className="flex flex-col gap-2">
            {
                isButtonVisible && 
                <div 
                    onClick={handleToggleDropdown} 
                    className="border-2 border-white rounded-md px-6 py-1 cursor-pointer">
                    <p className="text-white text-4xl font-bold text-center flex items-center">
                        Choose your zone here
                        <MousePointerClick className="ml-1" size={40} />
                    </p>
                </div>
            }

            {isDropdownVisible && (
                <div className="bg-gray-300 bg-opacity-30 rounded-lg transition-opacity duration-300">
                    {Object.entries(zones).map(([zoneKey,obj]) => (
                        <div 
                            key={zoneKey} 
                            onClick={() => handleZoneClick(zoneKey)}
                            className="p-4 text-white transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-white rounded-md text-3xl cursor-pointer">
                            <div className='flex justify-between'>
                                <p className="font-semibold">Table {zoneKey}</p>
                                <p className={`font-normal ${obj['t_status'] === 'A' ? 'text-green-500' : 'text-red-500'}`}>
                                    {obj['t_status'] === 'A' ? 'Available' : 'Not Available'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {isConfirmCardVisible === 1 && (
                <div className='w-full bg-white py-5 px-8 rounded-xl flex flex-col items-center gap-5'>
                    <div className='flex w-full justify-start' onClick={closeConfirmCard}>
                        <p className='flex justify-center items-center text-3xl font-bold hover:bg-zinc-200 rounded-md py-1 px-3'>
                            <ArrowBigLeft size={35} className='text-black'></ArrowBigLeft>Back
                        </p>
                    </div>
                    <p className='font-semibold text-4xl'>Your Table is <span className='font-bold text-green-700'>{zone}</span></p>
                    <p className='text-4xl'>Choose your favorite open set</p>
                    <div className='flex flex-col gap-2 w-full'>
                        {Object.entries(menu).map(([index, obj]) => (
                            <div 
                                key={index} 
                                className={`flex items-center gap-2 p-2 border border-gray-300 rounded-lg shadow-md transition duration-300 
                                    ${selectedItem && selectedItem['m_description'] === obj['m_description'] ? 'bg-gray-200' : 'bg-white'} 
                                    ${selectedItem && selectedItem['m_description'] !== obj['m_description']  ? 'opacity-50' : ''}`} 
                                onClick={() => handleSelect(obj)} 
                            >
                                <div className='relative flex-shrink-0 w-[30%] h-24'>
                                <img 
                                    src={obj['m_url']} 
                                    alt={obj['m_description']} 
                                    className='absolute top-0 left-0 w-full h-full object-cover' 
                                />
                                </div>
                                <div className='flex flex-col justify-center flex-grow p-2'>
                                    {/* <p className='font-semibold text-3xl'>{obj.name}</p> */}
                                    <p className='text-xl'>{obj['m_description']}</p>
                                    <p className='font-bold text-3xl'>${obj['m_price'].toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedItem && 
                        <button className='px-8 py-3 text-xl bg-black text-white font-bold rounded-lg' onClick={() => setConfirmCardVisible(2)}>
                            Next
                        </button>}
                </div>
            )}

            {isConfirmCardVisible === 2 && (
            <div className='w-full bg-white py-5 px-8 rounded-xl flex flex-col gap-5 items-center'>
                <div className="flex flex-col gap-3 mx-10">
                    <p className="text-black text-4xl font-bold">Discount</p>
                    <div className="flex">
                        <input type="text" placeholder="abc-def-ghi" className="border-2 border-black rounded-l-md px-4 py-1 text-4xl"></input>
                        <button className='px-4 py-1 text-4xl rounded-r-lg bg-black text-white' onClick={handleApplyDiscount} >Apply</button>
                    </div>
                </div>
                <p className='text-3xl font-semibold'>Apply Discount Code</p>
                <p className={`text-2xl font-semibold flex items-center ${discountApplied ? 'text-zinc-400 line-through' : 'text-black'}`}>
                    Regular Price: 
                    <span className="ml-2">{`$${selectedItem['m_price'].toFixed(2)}`}</span>
                </p>

                {discountApplied && (
                    <p className='text-4xl font-bold text-green-600'>
                        Discounted Price: ${selectedItem ? (selectedItem['m_price'] - 5).toFixed(2) : ''}
                    </p>
                )}

                <button className='px-8 py-3 text-xl bg-black text-white font-bold rounded-lg' onClick={() => setConfirmCardVisible(3)}>
                    Pay
                </button>
            </div>
            )}

            {isConfirmCardVisible === 3 && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm" onClick={() => router.push("/homepage")}>
                    <div className="bg-white p-10 rounded-2xl shadow-lg text-center flex flex-col gap-5 items-center max-w-lg">
                        <h2 className="text-5xl font-bold text-green-700">Thank You!</h2>
                        <p className="text-xl text-gray-700">
                            Your order has been successfully processed.
                        </p>
                        <button onClick={() => router.push("/homepage")}
                            className="px-8 py-3 mt-4 bg-green-700 text-white font-bold rounded-lg text-xl"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChooseZone;
