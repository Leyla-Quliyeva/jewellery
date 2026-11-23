import { useState } from "react";
import { assets } from "../assets/assets";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const normalized = email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!isValid) {
      toast.error("Please enter a valid email address");
      return;
    }

    const subscribe: string[] = JSON.parse(
      localStorage.getItem("subscribe") || "[]",
    );

    if (subscribe.includes(normalized)) {
      toast.success("You're already subscribed!");
      return;
    }

    localStorage.setItem(
      "subscribe",
      JSON.stringify([...subscribe, normalized]),
    );

    toast.success("Thank you for subscribing!", {
      description: "Enjoy 10% OFF your first order.",
    });
    setEmail("");
  };

  return (
    <section className="mt-20 md:mt-32 lg:mt-50">
      <div className="relative min-h-100 w-full md:min-h-125">
        <img
          className="absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-center"
          src={assets.newsletter}
          alt="Elegant jewelry"
        />

        <div className="absolute inset-0 bg-white/40 md:hidden" />

        <div className="urbanist relative flex min-h-100 flex-col items-start justify-center gap-4 px-5 font-semibold sm:px-10 md:min-h-125 md:gap-5 lg:px-24">
          <h2 className="text-3xl tracking-wide text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
            A Little Something Special{" "}
          </h2>

          <p className="max-w-xs text-sm text-gray-700 sm:max-w-md sm:text-base md:mt-3 md:text-gray-600">
            Subscribe to our newsletter and enjoy 10% OFF your first order.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-2 w-full max-w-full sm:max-w-sm md:mt-5 md:max-w-md"
          >
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                className="w-full bg-white px-4 py-3 pr-14 text-sm outline-none sm:px-5 sm:py-4 sm:pr-16 sm:text-base"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute inset-y-px right-px flex w-12 cursor-pointer items-center justify-center bg-orange-500 text-white transition hover:bg-orange-600 sm:w-14"
              >
                <FaPaperPlane className="text-lg sm:text-[22px]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
