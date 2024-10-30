export default function FacilityCard({ icons, topic, detail }) {

    return <div className="relative z-0 flex flex-col items-center justify-around bg-[#E4DFD9] h-[27rem] w-[19rem] py-[3.5rem] px-[1.5rem]">
        <div className="text-[3.75rem]">{icons}</div>
        <div className="text-[2.25rem]">{topic}</div>
        <div className="text-wrap text-center text-[1.5rem]">{detail}</div>
    </div>
} 