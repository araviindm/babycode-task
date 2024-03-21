import userIcon from "../assets/user_icon.png";
import shareBackground from "../assets/share_background.png";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { BuyNow } from "./BuyNow";
import readingImage from "../assets/reading_image.png";
import writingImage from "../assets/writing_image.png";
import vocabularyImage from "../assets/vocubulary_image.png";
import speakingImage from "../assets/speaking_image.png";
import newsImage from "../assets/news_image.png";
import listeningImage from "../assets/listening_image.png";
import classesImage from "../assets/classes_image.png";
import bookImage from "../assets/book_image.png";
import whatsAppIcon from "../assets/whatsapp_icon.png";
import youtubeIcon from "../assets/youtube_icon.png";

export function Content() {
  Chart.register(
    CategoryScale,
    LinearScale,
    LineController,
    PointElement,
    LineElement
  );
  const labels = [
    "Feb 16",
    "Feb 17",
    "Feb 18",
    "Feb 19",
    "Feb 20",
    "Feb 21",
    "Feb 22",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Values",
        data: [5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5], // Example values for the week
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div className="">
      {/* Profile */}
      <div className="justify-end hidden p-2 md:flex bg-slate-50">
        <p>
          <img src={userIcon} width={32} height={32} alt="User icon" />
        </p>
      </div>

      {/* Students helped */}
      <div className="flex items-center justify-between p-2 m-2 bg-white border border-blue-300 rounded-md md:hidden">
        <p>How many students we helped?</p>
        <button className="p-2 text-orange-400 bg-orange-100 rounded-2xl">
          Check
        </button>
      </div>
      <div className="justify-around p-2 md:flex">
        {/* Progress chart */}
        <div className="p-2 md:w-3/5">
          <p className="h-6 mb-2 text-xl font-semibold">
            Your Progress Summary
          </p>
          <div className="flex flex-col-reverse p-4 bg-white rounded-md sm:flex-col">
            <p className="p-2 bg-yellow-100 rounded-md">
              <span className="text-teal-300">Wow!</span> You're about to reach
              your targeted band.
            </p>
            <Line data={data} className="p-2" />
          </div>
        </div>
        {/* Help */}
        <div className="hidden p-2 mt-6 md:w-2/5 md:block">
          <div className="relative z-0 flex items-center justify-center m-1 text-center ">
            <img
              src={shareBackground}
              className="w-full md:w-[350px] h-80"
              alt="Share image"
            />
            <div className="absolute m-4 top-28">
              <p className="m-2 text-2xl font-semibold text-white">
                One share can save many lives
              </p>
              <p className="m-2 text-sm text-slate-100">
                Your one share can open a world of education for
                underpriveleged.
              </p>
              <button className="w-[80%] p-2 m-2 text-sm text-black bg-white rounded-2xl">
                Share app
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 md:flex">
        <div className="md:w-3/5">
          <p className="px-2 text-xl font-semibold">Prepare with ease</p>
          <div className="grid grid-cols-3 p-2 gap-y-4">
            <div className="flex flex-col items-center text-center cursor-pointer">
              <img
                src={speakingImage}
                width={100}
                height={100}
                alt="speaking"
              />
              <p>Speaking</p>
            </div>
            <div className="flex flex-col items-center text-center cursor-pointer">
              <img
                src={listeningImage}
                width={100}
                height={100}
                alt="listening"
              />
              <p>Listening</p>
            </div>
            <div className="flex flex-col items-center text-center cursor-pointer">
              <img src={readingImage} width={100} height={100} alt="reading" />
              <p>Reading</p>
            </div>
            <div className="flex flex-col items-center text-center cursor-pointer">
              <img src={writingImage} width={100} height={100} alt="writing" />
              <p>Writing</p>
            </div>
            <div className="flex flex-col items-center text-center cursor-pointer">
              <img
                src={vocabularyImage}
                width={100}
                height={100}
                alt="vocabulary"
              />
              <p>Vocabulary</p>
            </div>
            <div className="flex flex-col items-center text-center cursor-pointer">
              <img src={classesImage} width={100} height={100} alt="classes" />
              <p>Classes</p>
            </div>
            <div className="flex flex-col items-center text-center cursor-pointer">
              <img src={bookImage} width={100} height={100} alt="book" />
              <p>Book IELTS Exam</p>
            </div>
            <div className="flex flex-col items-center text-center cursor-pointer">
              <img src={newsImage} width={100} height={100} alt="news" />
              <p>News</p>
            </div>
          </div>
        </div>
        <div className="md:w-2/5">
          <div className="p-4 m-2 bg-white rounded-md p">
            <p className="m-2 text-xl font-semibold">Practice Mock Tests</p>
            <p className="m-2">
              Get the authentic IELTS exam exam with all four modules covered!
            </p>
            <button className="w-full p-2 m-2 text-white bg-blue-600 rounded-2xl">
              Start
            </button>
          </div>
          <div>
            <p className="text-xl">Quick Actions</p>
            <div className="flex flex-col items-center my-2">
              <div className="flex items-center justify-around w-3/4 p-2 mb-2 bg-white rounded-md">
                <img
                  src={youtubeIcon}
                  width={40}
                  height={40}
                  alt="Youtube icon"
                />
                <p>App Guide Video</p>
              </div>
              <div className="flex items-center justify-around w-3/4 p-2 mb-2 bg-white rounded-md">
                <img
                  src={whatsAppIcon}
                  width={34}
                  height={34}
                  alt="Whatsapp icon"
                />
                <p>Help & Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buy now */}
      <div className="p-4 md:hidden">
        <BuyNow />
      </div>
      {/* Help */}
      <div className="p-2 md:hidden">
        <div className="relative z-0 flex items-center justify-center m-1 text-center ">
          <img
            src={shareBackground}
            className="w-full md:w-[350px] h-80"
            alt="Share image"
          />
          <div className="absolute m-4 top-28">
            <p className="m-2 text-2xl font-semibold text-white">
              One share can save many lives
            </p>
            <p className="m-2 text-sm text-slate-100">
              Your one share can open a world of education for underpriveleged.
            </p>
            <button className="w-[80%] p-2 m-2 text-sm text-black bg-white rounded-2xl">
              Share app
            </button>
          </div>
        </div>
      </div>
      <div className="h-14"></div>
    </div>
  );
}
