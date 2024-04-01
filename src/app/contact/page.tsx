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
    <div className="p-4 mt-8 max-w-[800px]  mx-auto relative w-full">
      <h1 className="text-xl md:text-3xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
        Contact me
      </h1>
      <div className="max-w-[800px] mt-6 h-[160px] p-6 border rounded-lg flex items-center">
        <div className="flex-grow mt-4">
          <h2 className="text-2xl font-semibold mb-2 ">Email: amankohare@gmail.com</h2>
          <p className="mb-4">Phone: +91 6268518514</p>
          <button className="mb-4 h-10 w-28 border" >
            <a href="/resume.pdf" download> Resume</a>
          </button>
        </div>
     
      </div>

      <form onSubmit={handleSubmit} className="max-w-[800px] mx-auto mt-8">
        <div className="mb-4 w-full">
          <label htmlFor="name" className="block mb-2 text-sm font-semibold">Name</label>
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
          <label htmlFor="email" className="block mb-2 text-sm font-semibold">Email</label>
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
          <label htmlFor="message" className="block mb-2 text-sm font-semibold">Message</label>
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
  );
};

export default Contact;
