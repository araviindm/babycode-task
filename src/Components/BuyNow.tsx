import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineArrowCircleRight } from "react-icons/md";

export function BuyNow() {
  return (
    <div className="relative p-4 text-gray-800 bg-blue-100 rounded-lg">
      <div className="mb-2">
        <p className="text-xl font-semibold text-[#285de7]">Explore premium</p>
        <p className="font-semibold text-[#5861f7] text-base">
          features with ease!
        </p>
      </div>
      <div className="mb-2">
        <div className="flex items-center my-1 text-center text-ss">
          <p>
            <FaRegCheckCircle size={16} />
          </p>
          <p className="ml-2">Unlimited Speaking Test Access</p>
        </div>
        <div className="flex items-center my-1 text-center text-ss">
          <p>
            <FaRegCheckCircle size={16} />
          </p>
          <p className="ml-2">Unlimited Writing Test Access</p>
        </div>
        <div className="flex items-center my-1 text-center text-ss">
          <p>
            <FaRegCheckCircle size={16} />
          </p>
          <p className="ml-2">Analyze Your Answer</p>
        </div>
        <div className="flex items-center my-1 text-center text-ss">
          <p>
            <FaRegCheckCircle size={16} />
          </p>
          <p className="ml-2">Check Band Score</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="mt-1 font-bold text-ss">Only @ ₹299 </p>
      </div>
      <button className="absolute right-0 flex p-2 text-gray-100 bg-blue-700 bottom-1 rounded-l-3xl">
        <p>Buy Now</p>
        <p className="mx-1">
          <MdOutlineArrowCircleRight size={24} />
        </p>
      </button>
    </div>
  );
}
