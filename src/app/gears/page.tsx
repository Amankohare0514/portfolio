import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function Gears() {
  const testimonials = [
    {
      quote:
        "HONOR MagicBook 15, AMD Ryzen 5 5500U 15.6-inch (39.62 cm) FHD IPS Anti-Glare Thin and Light Laptop (8GB/256GB PCIe SSD/Windows 11/ Metal Body/Fingerprint Login/1.54Kg), Gray, BohrM-WDQ9CHNE",
      name: "Laptop",
      designation: "HONOR MagicBook 15",
      src: "/gear/laptop.jpg",
    },
    {
      quote:
        "Frontech KB-0039 Wired Super Design Gaming Keyboard | RGB Backlight Combo Set.",
      name: "Keyboard ",
      designation: "KB-0039 Wired Super Design Gaming Keyboard",
      src: "/gear/keyboard.png",
    },
    {
      quote:
        "Frontech KB-0039 Wired Super Design Optical Mouse| RGB Backlight Combo Set  (Black)",
      name: "Mouse",
      designation: "KB-0039 Wired Super Design Optical Mouse",
      src: "/gear/mouse.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simpleboAt Rockerz 430 w/ Beast Mode(40ms Low Latency),40HRS Playback & 40MM Drivers Bluetooth.",
      name: "Headphones",
      designation: "boAt Rockerz 430 w/ Beast Mode",
      src: "/gear/headphones.png",
    },
    {
      quote:
        "Full Rim Clubmaster Anti Glare Computer Glass For Men(48 mm)",
      name: "Eyewear",
      designation: "Anti-Glare Computer Glasses",
      src: "/gear/glass.png",
    },

  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export default Gears;