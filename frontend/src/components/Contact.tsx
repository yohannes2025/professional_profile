import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { contactService } from "../services/api";
import { ContactFormData } from "../types";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await contactService.sendMessage(formData);
      toast.success("Message sent successfully! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 md:px-20 py-24 text-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-5">
          Let's Work Together
        </h2>
        <p className="text-slate-400 mb-10">
          Have a project in mind? Send me a message.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-slate-800/50 rounded-xl border border-transparent focus:border-indigo-500 outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-slate-800/50 rounded-xl border border-transparent focus:border-indigo-500 outline-none transition-all"
          />
          <textarea
            name="message"
            placeholder="Write Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-6 py-4 bg-slate-800/50 rounded-xl border border-transparent focus:border-indigo-500 outline-none transition-all resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
