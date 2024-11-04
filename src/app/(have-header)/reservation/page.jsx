import Image from "next/image";
import DotDivider from "../../components/dot_divider";
import MakeAReservation from "../../components/make-a-reservation";
import stage from "../../../images/stage.png"
import ChooseZone from '../../components/choose-zone';



function ReservationPage() {

    const zones = {
        "204": 'A', // Available
        "205": 'R', // Reserved
        "206": 'O', // Occupied
        "207": 'A', // Available
        "208": 'R', // Reserved
    };

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