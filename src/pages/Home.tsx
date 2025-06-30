
import { useState } from "react";
import zapCan from "/zap-can.png"; // Make sure this is in your public folder or assets
// Update path if needed
import zap1 from "/zap-can.png";
import zap2 from "/zap-can.png";
import zap3 from "/zap-can.png";
import zap4 from "/zap-can.png";
import zap5 from "/zap-can.png";
import zap6 from "/zap-can.png";

export default function Home() {
  const [email, setEmail] = useState("");

  const flavors = [
    { name: "Neon Berry", emoji: "🍇⚡", desc: "A burst of juicy chaos." },
    { name: "Voltage Vanilla", emoji: "⚡🍦", desc: "Classic, with a zap." },
    { name: "Midnight Mango", emoji: "🌙🥭", desc: "Smooth as nightfall." },
    { name: "DNA Grape", emoji: "🧬🍷", desc: "So strong it rewrites your code." },
  ];

  const reviews = [
    { name: "Dev_Boi", quote: "Now I dream in JavaScript." },
    { name: "KeyboardWarrior", quote: "1 sip = 3 hours of clean code." },
    { name: "CSSLover2000", quote: "I drank ZAP! and deployed without crying." },
  ];

  const gallery = [zap1, zap2, zap3, zap4, zap5, zap6];

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-lime-400    ">ZAP!</h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-300">Shock your system ⚡ Stay wired.</p>
        <img
          src={zapCan}
          alt="ZAP Can"
          className="my-8 w-48 rounded-md animate-pulse hover:scale-105 transition-transform duration-300"
        />
        <button className="bg-lime-400 text-black px-6 py-3 rounded-full text-lg hover:bg-lime-300 transition">
          Try Now
        </button>
      </section>

      {/* Flavors */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-lime-300 mb-10">Explore the Voltage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {flavors.map((flavor) => (
            <div
              key={flavor.name}
              className="bg-neutral-900 rounded-lg p-5 text-center hover:scale-105 transition transform shadow-lg"
            >
              <div className="text-4xl mb-2">{flavor.emoji}</div>
              <h3 className="text-xl font-semibold text-lime-200">{flavor.name}</h3>
              <p className="text-sm text-gray-400 mt-2">{flavor.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-neutral-900 px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-lime-300 mb-10">Zapped Reactions</h2>
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-black rounded-lg p-6 flex-1 border border-neutral-700"
            >
              <p className="text-sm italic text-gray-300 mb-2">"{review.quote}"</p>
              <p className="text-xs text-right text-lime-400">– {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-lime-300 mb-10">ZAP in Action</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="rounded-lg object-cover hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-lime-400 text-black text-center px-6 py-12">
        <h2 className="text-3xl font-bold">Join the ZAP! Tribe</h2>
        <p className="text-sm mt-2 mb-6">Get notified when new flavors drop (or when we take over the world).</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("You're in, legend ⚡");
            setEmail("");
          }}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-black text-lime-400 px-6 py-2 rounded-lg hover:bg-neutral-900 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

    
    </main>
  );
}

    
    
    
 



