

const gallery = [
  "https://picsum.photos/seed/zap1/600/400",
  "https://picsum.photos/seed/zap2/600/400",
  "https://picsum.photos/seed/zap3/600/400",
  "https://picsum.photos/seed/zap4/600/400",
  "https://picsum.photos/seed/zap5/600/400",
  "https://picsum.photos/seed/zap6/600/400",
];

export default function Gallery() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12 font-sans">
      <h1 className="text-5xl text-center font-bold text-lime-400 mb-12">
        ZAP! in Action ⚡
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {gallery.map((url, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={url}
              alt={`ZAP Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-8 italic">
        Photos generated via <a href="https://picsum.photos" className="underline">picsum.photos</a> – real enough for fake ZAP marketing 💀
      </p>
    </main>
  );
}
