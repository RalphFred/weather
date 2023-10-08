import search from "../assets/search.svg";
import location from "../assets/location.svg";

export default function DesktopSidebar() {
  return (
    <div className="w-[350px] mr-4 p-6 rounded-tl-3xl rounded-bl-3xl bg-white">
      <div className="flex justify-between">
        <div className="flex">
          <img src={search} className="mr-3 w-6" />
          <input type="text" placeholder="Search for places..." className="border-b py-1 px-2  focus:outline-none focus:border-b-2"/>
        </div>
        <img src={location} className="w-6" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1>
          12&deg;C
        </h1>
        <h2>
          Monday, <span>16:00</span>
        </h2>
      </div>
      <div>
        
      </div>
    </div>
  );
}
