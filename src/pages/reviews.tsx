
const reviews = [
  {
    name: "Dev_Boi69",
    avatar: "https://i.pravatar.cc/100?img=12",
    quote: "I drank ZAP and my app finally passed Lighthouse.",
    rating: 5,
  },
  {
    name: "ReactNinjaX",
    avatar: "https://i.pravatar.cc/100?img=8",
    quote: "One sip and I built a full-stack app in 2 hours.",
    rating: 5,
  },
  {
    name: "GamerGirl2032",
    avatar: "https://i.pravatar.cc/100?img=23",
    quote: "ZAP! tastes like W energy, mixed with chaos and vibes.",
    rating: 4,
  },
  {
    name: "NullPointer",
    avatar: "https://i.pravatar.cc/100?img=40",
    quote: "ZAP fixed my runtime errors. I didn't even touch the code.",
    rating: 5,
  },
  {
    name: "404Soul",
    avatar: "https://i.pravatar.cc/100?img=18",
    quote: "I don't remember writing code. ZAP wrote it for me.",
    rating: 5,
  },
];

const getStars = (count: number) =>
  "⭐".repeat(count) + "✩".repeat(5 - count);

export default function Reviews() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-16 font-sans">
      <h1 className="text-5xl text-center font-bold text-lime-400 mb-12">
        Zapped Reactions ⚡
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-lime-400"
              />
              <div>
                <h3 className="text-lg font-bold text-lime-300">{review.name}</h3>
                <p className="text-sm text-yellow-400">{getStars(review.rating)}</p>
              </div>
            </div>
            <p className="italic text-gray-300">"{review.quote}"</p>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mt-12 italic">
        All reviews are totally real. Definitely not made up by ZAP’s marketing intern 💅
      </p>
    </main>
  );
}
