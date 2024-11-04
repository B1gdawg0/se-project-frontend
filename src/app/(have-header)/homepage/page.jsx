import DotDivider from "../../components/dot_divider"
import FacilityCard from "../../components/faci_card";
import { FaMusic } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { IoFootball } from "react-icons/io5";
import { GiPoolTableCorner } from "react-icons/gi";
import ShowCard from "../../components/show_card";
import Footer from "../../components/footer";

function HomePage() {
  return (
    <div className="bg-background">
      <div className="w-full relative">
        <div className="absolute bottom-[55%] left-[33%] md:left-[37%] z-10 text-white text-[4rem] md:text-[10rem] pointer-events-none">
          DRINK
        </div>
        <div className="absolute bottom-[47%] left-[40%] md:left-[47%] z-20 text-main text-[4rem] md:text-[10rem] pointer-events-none">
          &
        </div>
        <div className="absolute bottom-[38%] left-[27%] md:left-[33%] z-30 text-white text-[4rem] md:text-[10rem] pointer-events-none">
          GROOVE
        </div>
        <div className="bg-[url('../images/Banner.jpg')] z-0 bg-cover bg-center grayscale w-full h-[30rem] md:h-[53.3rem] transition-all ease-in-out hover:grayscale-0"></div>
      </div>

      <div className="bg-secondary_background flex flex-col items-center justify-around h-auto md:h-screen p-4 md:p-0">
        <div className="text-center">
          <div className="text-[1.5rem] md:text-[4rem]">
            A TASTE OF THE COUNTRYSIDE
          </div>
          <div className="text-[1.5rem] md:text-[4rem]">
            IN THE HEART OF THE CITY
          </div>
        </div>
        <DotDivider />
        <div className="text-center">
          <div className="text-[1rem] md:text-[2rem] max-w-[90%] md:max-w-[80%] mx-auto">
            Over all these long years we have been accumulating only the best brewing traditions and recipes.
          </div>
          <div className="text-[1rem] md:text-[2rem] max-w-[90%] md:max-w-[80%] mx-auto">
            We keep surprising our customers and ourselves. Turns out nothing tastes as good as our beer!
          </div>
        </div>
        <DotDivider />
        <div className="flex flex-col md:flex-row justify-around items-center w-full space-y-6 md:space-y-0">
          <FacilityCard icons={<FaMusic />} topic="Live Music" detail="A lot of beer, friends, cool music, and fun with the best rock bands in town." />
          <FacilityCard icons={<TbTargetArrow />} topic="Throwing Dart" detail="Take part in our darts competitions among the bravest regulars of the pub." />
          <FacilityCard icons={<IoFootball />} topic="Live Sport" detail="Enjoy watching live sport events in a friendly atmosphere with a pint of beer." />
          <FacilityCard icons={<GiPoolTableCorner />} topic="Pool Table" detail="Your friendly gathering place to enjoy playing pool and relaxing with friends." />
        </div>
      </div>

      <div className="h-auto md:h-screen bg-background">
        <div className="flex flex-col items-center justify-around h-full space-y-4 md:space-y-0">
          <div className="text-white text-[2rem] md:text-[4rem]">UPCOMING EVENT</div>
          <ShowCard name="Watch the Epsom Derby" time="08/13/2025 - 08/04/2028" desc="The richest horse race in Britain and the most prestigious one" />
          <ShowCard name="Watch the Epsom Derby" time="08/13/2025 - 08/04/2028" desc="The richest horse race in Britain and the most prestigious one" />
          <ShowCard name="Watch the Epsom Derby" time="08/13/2025 - 08/04/2028" desc="The richest horse race in Britain and the most prestigious one" />
          <ShowCard name="Watch the Epsom Derby" time="08/13/2025 - 08/04/2028" desc="The richest horse race in Britain and the most prestigious one" />
        </div>
        <Footer />
      </div>
    </div>

  )
}

export default HomePage