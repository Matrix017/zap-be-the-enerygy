
     

const flavors = [
  {
    name: "Neon Berry",
    emoji: "🍇⚡",
    description: "Explodes with neon chaos energy and pure sugar madness.",
    color: "from-purple-600 to-pink-500",
  },
  {
    name: "Voltage Vanilla",
    emoji: "⚡🍦",
    description: "Classic vanilla, electrified for your soul.",
    color: "from-yellow-300 to-blue-500",
  },
  {
    name: "Midnight Mango",
    emoji: "🌙🥭",
    description: "Smooth as nightfall, loud as midnight thunder.",
    color: "from-orange-500 to-black",
  },
  {
    name: "DNA Grape",
    emoji: "🧬🍷",
    description: "So strong it rewires your brain. Maybe even your DNA.",
    color: "from-purple-800 to-gray-700",
  },
  {
    name: "Static Citrus",
    emoji: "🍋⚡",
    description: "A zap of citrus that'll glitch your taste buds.",
    color: "from-lime-400 to-yellow-500",
  },
  {
    name: "Glitch Peach",
    emoji: "🍑💥",
    description: "Like a software crash in your mouth. And you love it.",
    color: "from-pink-400 to-red-500",
  },
];

export default function Flavors() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12 font-sans">
      <h1 className="text-5xl text-lime-400 font-bold text-center mb-12">ZAP! Flavors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {flavors.map((flavor, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 bg-gradient-to-br ${flavor.color} text-white shadow-lg hover:scale-105 transition duration-300`}
          >
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-2">
              {flavor.emoji} {flavor.name}
            </h2>
            <p className="text-sm text-white/80">{flavor.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

 
