import { useState } from "react";

export default function Join() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setSubmitted(true);
    setEmail("");

    // optional: reset the message after 4 seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20 font-sans flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-lime-400 mb-6">Join the ZAP! Tribe</h1>
      <p className="text-gray-400 max-w-xl mb-8">
        Get early access to flavor drops, fake secret merch, and exclusive nonsense.  
        No spam. Just ZAP.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-lg text-white w-full outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-lime-400 text-white px-6 py-3 rounded-lg hover:bg-lime-300 transition"
        >
          Join Now
        </button>
      </form>

      {submitted && (
        <p className="text-green-400 mt-4 text-sm animate-pulse">
          You're officially part of the ZAP cult ⚡💀 Welcome, legend.
        </p>
      )}

      <div className="mt-16 text-sm text-gray-500 max-w-md italic">
        No actual emails are collected. This form is as fake as our drink.  
        But hey, it's the *thought* that counts.
      </div>
    </main>
  );
}
