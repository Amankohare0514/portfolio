"use client"
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';
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
      toast.success('message send successfully');

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
      <h1 className="text-xl mt-8  md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
        Contact
      </h1>
      <div className="p-4  max-w-[800px]  mx-auto relative w-full">
        <form onSubmit={handleSubmit} className="max-w-[800px] mx-auto">
          <div className="mb-4 w-full">
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent rounded-md border focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
