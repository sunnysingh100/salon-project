"use client";
import Form from "@/components/Form";
import {motion} from "framer-motion";
import Image from "next/image";

function ContactPage() {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2}}}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col xl:flex-row gap-12 h-full">
          {/* text */}
          <motion.div
            initial={{opacity: 0, x: -60}}
            animate={{
              opacity: 1,
              x: 0,
              transition: {delay: 2, duration: 0.8, ease: "easeInOut"},
            }}
            className="flex flex-col flex-1 justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">Contact info</h3>
            {/* items */}
            <div className="flex flex-col items-center xl:items-start gap-12">
              {/* item */}
              <div className="flex items-start gap-3">
                {/* icon */}
                <div className="w-[36px] h-[36px] relative">
                  <Image src="/assets/contact/pin.svg" alt="icon" fill />
                </div>
                <div>
                  <h4 className="h4 mb-2">Address</h4>
                  <div className="pt-1 flex flex-col gap-1">
                    <p>123 Main Street, Anytown</p>
                    <p>USA 12345</p>
                  </div>
                </div>
              </div>
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="w-[36px] h-[36px] relative">
                  <Image src="/assets/contact/phone.svg" alt="icon" fill />
                </div>
                <div>
                  <h4 className="h4 mb-2">Phone Number</h4>
                  <div className="pt-1 flex flex-col gap-1">
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Fax: +1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="w-[36px] h-[36px] relative">
                  <Image src="/assets/contact/email.svg" alt="icon" fill />
                </div>
                <div>
                  <h4 className="h4 mb-2">Email Address</h4>
                  <div className="flex flex-col gap-1">
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            initial={{opacity: 0, x: 60}}
            animate={{
              opacity: 1,
              x: 0,
              transition: {delay: 2.4, duration: 0.8, ease: "easeInOut"},
            }}
            className="flex-1 bg-[#f0cfbc] w-full max-w-[580px] p-10 gap-4 mx-auto xl:mx-0"
          >
            <h3 className="h3 mb-8 text-center">Get in Touch</h3>
            <Form />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactPage;
