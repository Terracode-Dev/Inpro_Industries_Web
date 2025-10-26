import React, { useState } from "react";
import {
  Printer,
  FileText,
  Image,
  Package,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: FileText,
      title: "Customise Year Planer",
      description: "Personalized planners tailored to your needs",
      image: "./WhatsApp Image 2025-10-25 at 21.07.54.jpeg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Image,
      title: "Table Calender",
      description: "Elegant desk calendars for every space",
      image: "./WhatsApp Image 2025-10-25 at 21.07.35 (1).jpeg",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Package,
      title: "Spiral Binding",
      description: "Professional binding for documents",
      image: "./Book-bindings-1-1024x683.jpg",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Printer,
      title: "Hard Cover Making",
      description: "Premium hardcover book production",
      image: "./20231127-Wooding-DSC09132.jpg",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FileText,
      title: "PVC Stationery",
      description: "Durable waterproof stationery items",
      image: "./31-500x500.webp",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Image,
      title: "Laminating",
      description: "Protect and preserve your documents",
      image: "./worker-laminating-pouches-light-blue-600nw-2115660893.webp",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Package,
      title: "Foiling",
      description: "Luxurious metallic finishing touches",
      image: "./1280_HHP-3.webp",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: Printer,
      title: "Customise Notebook",
      description: "Design your perfect writing companion",
      image: "./black-floral.jpg",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Printer,
      title: "Cake Boards",
      description: "Custom boards for your special occasions",
      image: "./WhatsApp Image 2025-10-25 at 21.07.40.jpeg",
      color: "from-fuchsia-500 to-pink-500",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden"
      id="services"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96/home/umayangaathapaththu/Downloads/WhatsApp Unknown 2025-10-26 at 09.48.17/WhatsApp Image 2025-10-25 at 21.07.35 (1).jpeg bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>What We Offer</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional printing solutions crafted with precision and care for
            all your creative needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
                  {/* Image Container with Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>

                    {/* Icon Badge */}
                    <div
                      className={`absolute top-4 right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center transform transition-all duration-500 ${isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"}`}
                    >
                      <Icon
                        className={`w-6 h-6 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-3">
                    <h3
                      className={`text-xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent transition-all duration-300`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-gray-600 text-sm leading-relaxed transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-70 translate-y-1"}`}
                    >
                      {service.description}
                    </p>

                    {/* Bottom Border Animation */}
                    <div className="pt-4">
                      <div
                        className={`h-1 bg-gradient-to-r ${service.color} rounded-full transition-all duration-500 ${isHovered ? "w-full" : "w-0"}`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        {/*<div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>*/}
      </div>
    </section>
  );
};

export default Services;
