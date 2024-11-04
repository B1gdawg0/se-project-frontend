'use client'
import Image from "next/image";
import DotDivider from "../../components/dot_divider";
import MakeAReservation from "../../components/make-a-reservation";
import stage from "../../../images/stage.png"
import ChooseZone from '../../components/choose-zone';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GetTables } from "../../../hook/table";



function ReservationPage() {
    const [table, setTable] = useState([])
    const router = useRouter()

    useEffect(() => {
        if (!CheckUserToken()) {
            return router.push('/login')
        }
        const fetchData = async () => {
            const res = await GetTables()

            if (res.status === 200) {
                console.log(res.data.payload.tables.tables)
                setTable(res.data.payload.tables.tables)
            }
        }

        fetchData();
    }
        , [])

    return (
        <div className="bg-background flex flex-col items-center py-10 gap-9">
            <MakeAReservation></MakeAReservation>
            <DotDivider></DotDivider>
            <p className="text-white text-4xl">If you need a private space for an office party, a birthday celebration, business meetings or more, we have these areas available.</p>
            <DotDivider></DotDivider>
            <div className="flex flex-row gap-8 justify-center">
                <div className="w-1/2 ">
                    <Image src={stage} alt="stage.png"></Image>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <ChooseZone zones={zones}></ChooseZone>
                </div>
            </div>
        </div>);
}

export default ReservationPage