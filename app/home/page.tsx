import Image from "next/image";
import TaskList from "../components/TaskList";
import { profile } from "../constant/media";
import AnalogClock from "../components/AnalogClock";
import { FaPlus } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="w-full relative pb-4">
      <div className="flex flex-col items-center pt-20 bg-[#50C2C9] w-full mb-4">
          <Image
              src={profile}
              alt="nav"
              width={100}
              height={100}
              className='object-cover rounded-full'
          />
          <h1 className="text-white text-lg font-bold mb-4">Welcome Jeegar goyani</h1>
      </div>
      <div className="absolute top-0 w-full">
          <Navbar />
      </div>
      <AnalogClock />
      <h2 className="text-sm font-semibold mb-8 px-6">Task List</h2>
      <div className="bg-white pt-10 pb-4 mx-6 px-6 shadow-lg shadow-[#00000040] rounded-lg">
          <div className="flex justify-between items-center mb-7">
              <h2 className="text-xs font-semibold text-center">Daily Task</h2>
              <FaPlus className="text-[#50C2C9] text-base font-bold" />
          </div>
          <TaskList />
      </div>
    </div>
  );
}