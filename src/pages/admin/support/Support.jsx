import { MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const SupportPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Address */}
        <div className="bg-blue-600 p-8 rounded-xl shadow-xl text-white flex flex-col items-center">
          <div className="text-5xl mb-6">
            <FaMapMarkedAlt />
          </div>
          <h3 className="text-2xl font-bold mb-3">Address</h3>
          <p className="text-center">Mahadevsthan Temple Baneshwor, Koteshwor, Kathmandu</p>
        </div>

        {/* Email */}
        <div className="bg-blue-600 p-8 rounded-xl shadow-xl text-white flex flex-col items-center">
          <div className="text-5xl mb-6">
            
            <MdEmail />
          </div>
          <h3 className="text-2xl font-bold mb-3">E-Mail</h3>
          <p className="text-center">info@bibaabo.com</p>
          <p className="text-center">info@bibaabo.com</p>
        </div>

        {/* Contact Number */}
        <div className="bg-blue-600 p-8 rounded-xl shadow-xl text-white flex flex-col items-center">
          <div className="text-5xl mb-6">
            <FaPhone />
          </div>
          <h3 className="text-2xl font-bold mb-3">Contact Number</h3>
          <p className="text-center">97234455666, 9712345432, 97123453223</p>
          <p className="text-center">01-5923432/23</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Get In Touch</h2>
          <form>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Write Your Message"
                className="border border-gray-300 p-4 rounded-lg w-full h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Send Now
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240403353675!2d85.3123317763674!3d27.709862776181083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1724234982618!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
