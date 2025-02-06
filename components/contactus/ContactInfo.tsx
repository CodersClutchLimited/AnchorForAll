// components/ContactInfo.tsx
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-[70px] lg:grid-cols-3 justify-center gap-4 p-6">
      {/* Address */}
      <div className="bg-green-700 text-white p-8 rounded-xl w-64 text-center">
        <FaMapMarkerAlt size={40} className="mx-auto mb-4" />
        <h3 className="text-xl font-semibold">ADDRESS</h3>
        <p className="mt-2 text-sm">
          4 Templesi Lane Airport <br />
          Residential Area Accra- <br />
          Ghana
        </p>
      </div>

      {/* Phone */}
      <div className="bg-gray-800 text-white p-8 rounded-xl w-64 text-center">
        <FaPhoneAlt size={40} className="mx-auto mb-4" />
        <h3 className="text-xl font-semibold">PHONE</h3>
        <p className="mt-2 text-sm">+233 30 394 1189</p>
      </div>

      {/* Email */}
      <div className="bg-black text-white p-8 rounded-xl w-64 text-center">
        <FaEnvelope size={40} className="mx-auto mb-4" />
        <h3 className="text-xl font-semibold">EMAIL</h3>
        <p className="mt-2 text-sm">info@newafricafoundation.org</p>
      </div>
    </div>
  );
};

export default ContactInfo;
