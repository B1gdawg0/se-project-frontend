'use client';
import { MousePointerClick, ArrowBigLeft } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import beer from "../../images/beer.png";
import { useRouter } from 'next/navigation';
import { GetMenu } from "../../hook/menu"
import { CheckUserToken } from '../../../utils/token';
import { BookTable } from '../../hook/table';
import { GetUser } from '../../hook/user';
import { GetUserData } from '../../../utils/user';

function ChooseZone({ zones }) {
    const [isButtonVisible, setButtonVisible] = useState(true);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isConfirmCardVisible, setConfirmCardVisible] = useState(0);
    const [zone, setZone] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [discountApplied, setDiscountApplied] = useState(false);
    const [file, setFile] = useState(null);
    const [receiptUrl, setReceiptUrl] = useState(null);
    const [menu, setMenu] = useState(null)
    const [isClickPurchase, setIsClickPurchase] = useState(false);
    const router = useRouter();

    const createFirstOrder = async () => {
        try {
            const user = GetUserData();
            const data = {
                payload: {
                    "c_id": user.ID,
                    "t_status": "R",
                    "o_url": receiptUrl,
                    "orderline": {
                        "m_id": selectedItem['m_id'],
                        "quantity": "1",
                        "price": `${selectedItem['m_price']}`,
                    }
                },
                TID: zone
            }

            const res = await BookTable(data)
            if (res.status === 200) {
                setIsClickPurchase(false)
                return setConfirmCardVisible(3)
            }
        } catch (err) {
            alert(err)
        }
    }

    const handlePurchase = () => {
        setIsClickPurchase(true);
    }

    const handleApplyDiscount = () => {
        setDiscountApplied(true);
    };

    const handleSelect = (item) => {
        setSelectedItem(item);
    };

    const handleToggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
          setFile(file);
          setReceiptUrl(URL.createObjectURL(file));
        }
        console.log("Receipt URL : ", receiptUrl);
      };

    useEffect(() => {

        const fetchMenu = async () => {
            const res = await GetMenu()

            if (res.status === 200) {
                setMenu(res.data.payload.menus)
            }
        }

        if (CheckUserToken()) {
            fetchMenu();
        }
    }, [])

    const handleZoneClick = (zone) => {
        if (zones[zone]['t_status'] === 'A') {
            setZone(zones[zone]['t_id']);
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
                    {Object.entries(zones).map(([zoneKey, obj]) => (
                        <div
                            key={zoneKey}
                            onClick={() => handleZoneClick(zoneKey)}
                            className="p-4 text-white transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-white rounded-md text-3xl cursor-pointer">
                            <div className='flex justify-between'>
                                <p className="font-semibold">Table {obj['t_id']}</p>
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
                                    ${selectedItem && selectedItem['m_description'] !== obj['m_description'] ? 'opacity-50' : ''}`}
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

                    <button className='px-8 py-3 text-xl bg-black text-white font-bold rounded-lg' onClick={handlePurchase}>
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

            {isClickPurchase && (
                <div className="fixed inset-0 bg-background bg-opacity-90 flex items-center justify-center z-50 p-4 sm:p-8">
                    <div className="bg-background p-6 border border-main rounded-lg shadow-lg">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="https://www.scb.co.th/content/media/personal-banking/digital-banking/scb-easy/how-to/qr-code/qr-code-generated-7.jpg"
                                width={250}
                                height={250}
                                alt="QR-Code"
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label
                                className="mb-2 text-sm font-medium text-gray-900"
                                htmlFor="file_input"
                            >
                                Upload file
                            </label>
                            <input
                                id="file_input"
                                type="file"
                                onChange={handleFileChange}
                                className="text-black border border-gray-300 rounded-lg bg-gray-50 p-2"
                            />
                            <div className="text-white mt-2">
                                {file ? file.name : "No file selected"}
                            </div>
                        </div>
                        <button
                            onClick={createFirstOrder}
                            className="bg-main text-black rounded-xl w-full py-2 text-lg font-bold my-2 hover:bg-opacity-80 transition duration-300"
                        >
                            Confirm Purchase
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChooseZone;
