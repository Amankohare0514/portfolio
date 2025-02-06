"use client"
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        'service_ixft89j',
        'template_k2jhcu8',
        e.target,
        'c0lf2uMPzW6yI9Fwh'
      );
      toast.success('Message sent successfully');

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form');
    }
  };

  return (
    <>
      <section className="w-full py-12 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
          >
            Contact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
          >
            Feel free to reach out with any questions or messages.
          </motion.p>

          <motion.hr
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 border-t-2 border-gray-300 dark:border-gray-700 w-1/4"
          />
        </motion.div>
      </section>
      <div className="max-w-[800px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between p-4">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Mail className="w-5 h-5 text-gray-900 dark:text-white" />
            <span className="text-gray-600 dark:text-gray-300">amankohare@gmail.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Phone className="w-5 h-5 text-gray-900 dark:text-white" />
            <span className="text-gray-600 dark:text-gray-300">+91 6268518514</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <MapPin className="w-5 h-5 text-gray-900 dark:text-white" />
            <span className="text-gray-600 dark:text-gray-300">Vijay Nagar, Indore, India, 452012</span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent rounded-md border focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
