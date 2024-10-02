import Navbar from "../components/navbar"


function HomePage() {
    return (
        <div className="h-screen bg-background">
            <Navbar />
            <div className="w-screen">
                <div className="bg-[url('../images/Banner.jpg')] bg-cover bg-center grayscale w-screen h-[53.3rem] hover:grayscale-0"></div>
                
            </div>
        </div>
    )
}

export default HomePage