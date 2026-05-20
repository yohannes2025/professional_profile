import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { serviceService } from "../services/api";
import { Service } from "../types";

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await serviceService.getServices();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
        // Fallback data
        setServices([
          {
            id: 1,
            title: "Web Development",
            description:
              "I build modern and scalable websites using the latest technologies.",
            icon: "fa-code",
            order: 1,
          },
          {
            id: 2,
            title: "Responsive Design",
            description:
              "Your website will work perfectly across desktop, tablet, and mobile devices.",
            icon: "fa-mobile-alt",
            order: 2,
          },
          {
            id: 3,
            title: "Fast Performance",
            description:
              "Optimized loading speed and smooth user experience for all visitors.",
            icon: "fa-gauge-high",
            order: 3,
          },
          {
            id: 4,
            title: "SEO Optimization",
            description:
              "SEO-friendly websites that help your business rank higher on Google.",
            icon: "fa-rocket",
            order: 4,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="px-4 md:px-20 py-24">
      <div className="text-center mb-16">
        <p className="text-indigo-500 font-semibold mb-3">WHAT I DO</p>
        <h2 className="text-3xl md:text-5xl font-bold">Services I Provide</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <i
                className={`fas ${service.icon} text-4xl text-indigo-500 mb-6`}
              ></i>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Services;
