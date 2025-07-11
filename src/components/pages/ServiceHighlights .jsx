import { Truck, Headset, RotateCcw, Lock } from "lucide-react";

const services = [
  {
    icon: <Truck className="w-6 h-6 text-gray-500" />,
    title: "STANDARD SHIPPING",
    description: "Free shipping on in India order or order above ₹ 1,000",
  },
  {
    icon: <Headset className="w-6 h-6 text-gray-500" />,
    title: "SUPPORT 24/7",
    description: "Contact us 24 hours a day, 7 days a week",
  },
  {
    icon: <RotateCcw className="w-6 h-6 text-gray-500" />,
    title: "7 DAYS RETURN",
    description: "Simply return it within 7 days for an exchange.",
  },
  {
    icon: <Lock className="w-6 h-6 text-gray-500" />,
    title: "100% PAYMENT SECURE",
    description: "We ensure secure payment with our PhonePe payment gateway partner",
  },
];

const ServiceHighlights = () => {
  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2">{service.icon}</div>
            <h3 className="text-sm font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;
