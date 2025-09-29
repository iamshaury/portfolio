"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import myPic from "@/lib/images/myPic.png";


interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSubmitStatus("success");
          setIsSubmitting(false);
          setTimeout(() => {
            onClose();
            setSubmitStatus(null);
            setMessage("");
            setEmail("");
          }, 2000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-lg text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Profile / Intro */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={myPic.src}
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">Shaury Chaudhary</h2>
                <p className="text-gray-400 text-sm">
                  Hey, thanks for visiting my website! If you have any questions
                  or just want to say hi, feel free to send me a message.
                </p>
              </div>
            </div>

            {/* Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message..."
                className="w-full bg-black/40 text-white border border-gray-600 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={4}
                maxLength={1000}
                required
              />
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com (required)"
                className="w-full bg-black/40 text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />

              {/* Counter + Button */}
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{message.length} / 1000</span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <p className="text-green-400 text-center mt-2">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center mt-2">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
