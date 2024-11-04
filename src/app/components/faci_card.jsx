export default function FacilityCard(props) {
    return (
        <div className="relative z-0 flex flex-col items-center justify-around bg-[#E4DFD9] h-[20rem] md:h-[27rem] w-[15rem] md:w-[19rem] py-[2rem] md:py-[3.5rem] px-[1rem] md:px-[1.5rem] transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="text-[2.5rem] md:text-[3.75rem]">{props.icons}</div>
            <div className="text-[1.75rem] md:text-[2.25rem] text-center">{props.topic}</div>
            <div className="text-wrap text-center text-[1rem] md:text-[1.5rem]">{props.detail}</div>
        </div>
    );
}
