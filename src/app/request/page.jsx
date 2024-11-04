'use client'
import axios from "axios";
import { GetToken } from "../../hook/token"
import { useState } from "react";

export default function RequestPage() {
    const [isRequestSong, setIsRequestSong] = useState(false);
    const [isIgPosting, setIsIgPosting] = useState(false);

    const [songSearch, setSongSearch] = useState("");
    const [igAccount, setIgAccount] = useState("");
    const [igImage, setIgImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    function handleRequestSong() {
        setIsRequestSong(true);
        setIsIgPosting(false);
    }

    function handleIgPosting() {
        setIsIgPosting(true);
        setIsRequestSong(false);
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            setIgImage(URL.createObjectURL(file));
            setImagePreview(URL.createObjectURL(file));
        }
    }

    function triggerFileInput() {
        document.getElementById("fileInput").click();
    }

    function handlePostIg() {
        async function sendData() {

            try {
                const token = GetToken();
                console.log(token);
                console.log(igAccount, igImage);

                const url = `http://localhost:8000/ig-lines`
                const res = await axios.post(url,
                    {
                        ig_account: igAccount,
                        ig_image_url: igImage,
                    },
                    {
                        headers:
                        {
                            'Authorization': token,
                        },
                    }
                );

                if (res.status === 200) {
                    alert("Posted to Instagram successfully!");
                } else {
                    alert("Failed to post to Instagram!");
                }
            } catch (err) {
                alert("Failed to post to Instagram!");
            }
        }
        sendData();
    }
    function handleSendRequestSong() {
        async function sendData() {

            try {
                const token = GetToken();
                console.log(token);
                console.log(songSearch);

                const url = `http://localhost:8000/music-lines`
                const res = await axios.post(url,
                    {
                        music_name: songSearch,

                    },
                    {
                        headers:
                        {
                            'Authorization': token,
                        },
                    }
                );

                if (res.status === 200) {
                    alert("Request Song successfully!");
                } else {
                    alert("Failed to Request Song!");
                }
            } catch (err) {
                alert("Failed to Request Song!");
            }
        }
        sendData();
    }

    return (
        <div className="bg-background w-screen h-screen p-5 flex items-center justify-center">
            <div className="border-2 border-gold w-full h-full rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col h-full w-full">
                    {/* Topic Choosing */}
                    <div className="flex flex-row justify-center items-center mx-[10rem] my-10 border-b-[1px] border-b-white">
                        <div className="mb-10">
                            <button
                                className="text-white text-[2rem] mx-20 hover:underline hover:text-main transform hover:scale-105 transition-all"
                                onClick={handleRequestSong}
                            >
                                Request Song
                            </button>
                            <button
                                className="text-white text-[2rem] mx-20 hover:underline hover:text-main transform hover:scale-105 transition-all"
                                onClick={handleIgPosting}
                            >
                                Warp Portal
                            </button>
                        </div>
                    </div>
                    {/* Content Section */}
                    <div className="h-full p-5">
                        {/* Request Song Section */}
                        {isRequestSong && (
                            <div>
                                <div className="mb-4 text-center flex flex-col justify-around items-center">
                                    <div className="text-[3rem] font-bold text-white">Request Song!</div>
                                    <div className="flex flex-row w-full justify-center items-center">
                                        <input
                                            type="text"
                                            placeholder="Search for a song..."
                                            value={songSearch}
                                            onChange={(e) => setSongSearch(e.target.value)}
                                            className="border-main p-2 rounded w-1/3"
                                        />
                                        <button onClick={handleSendRequestSong} className="bg-main text-secondary-main mx-2 py-2 px-5 rounded">Send</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Posting IG's Account Section */}
                        {isIgPosting && (
                            <div className="">
                                <div className="mb-4 text-center flex flex-col justify-around items-center">
                                    <div className="text-[3rem] font-bold text-white">IG Posting</div>
                                    {/* Clickable image preview */}
                                    <div
                                        className="mb-4 w-40 h-40 rounded-full border border-main flex items-center justify-center cursor-pointer overflow-hidden bg-gray-100"
                                        onClick={triggerFileInput}
                                    >
                                        {imagePreview ? (
                                            <img src={imagePreview} alt="Image Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-gray-500">Click to upload</span>
                                        )}
                                    </div>
                                    {/* Hidden file input */}
                                    <input
                                        id="fileInput"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        style={{ display: "none" }}
                                    />
                                    <div className="flex flex-col w-full justify-center items-center">
                                        <input
                                            type="text"
                                            placeholder="Enter IG account..."
                                            value={igAccount}
                                            onChange={(e) => { setIgAccount(e.target.value) }}
                                            className="border p-2 rounded w-[15rem] mb-4"
                                        />
                                        <button onClick={handlePostIg} className="bg-main text-secondary-main p-2 rounded">Post</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
