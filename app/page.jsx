import Link from "next/link";
import animals from "@/data/animals";
import AnimalCard from "@/components/AnimalCard";

export default function Home() {
  const featured = animals.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-500 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
           QurbaniHat
        </h1>
        <p className="text-lg md:text-xl text-green-100 mb-8 max-w-xl mx-auto">
          বাংলাদেশের সেরা অনলাইন কুরবানির পশুর হাট। সেরা পশু, সেরা দাম।
        </p>
        <Link
          href="/animals"
          className="bg-white text-green-700 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition text-lg"
        >
          সব পশু দেখুন →
        </Link>
      </section>

      {/* Featured Animals */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
           Featured Animals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>

      {/* Qurbani Tips */}
     {/* Qurbani Tips */}
<section className="bg-green-50 py-16 px-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
      Qurbani Tips
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: "সুস্থ পশু বেছে নিন",
          desc: "কুরবানির পশু অবশ্যই সুস্থ, নিখুঁত এবং বয়সে পরিপক্ক হতে হবে।",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0WJDJWjTiUA7IY1ktZ2eejxRdyVNmqGKIQ&s",
        },
        {
          title: "আগেই বুকিং দিন",
          desc: "ঈদের আগে পশুর দাম বাড়ে। তাই আগেভাগে বুকিং দিয়ে রাখুন।",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj0fk0FRVlki16nKEJbU6VYtFs0NsWEnFzA&s",
        },
        {
          title: "ডেলিভারি নিশ্চিত করুন",
          desc: "বুকিং দেওয়ার সময় ডেলিভারির তারিখ ও স্থান নিশ্চিত করুন।",
          img: "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=200&auto=format&fit=crop",
        },
      ].map((tip, i) => (
        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <img
            src={tip.img}
            alt={tip.title}
            className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="font-bold text-gray-800 mb-2">{tip.title}</h3>
          <p className="text-gray-500 text-sm">{tip.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Top Breeds */}
<section className="max-w-6xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
    Top Breeds
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      {
        breed: "Local Deshi",
        count: "সবচেয়ে জনপ্রিয়",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8X4iywnsFojitCFv6-FFI-GOTWISUaZiyOA&s",
      },
      {
        breed: "Shahiwal",
        count: "উচ্চ মাংস উৎপাদন",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj0fk0FRVlki16nKEJbU6VYtFs0NsWEnFzA&s",
      },
      {
        breed: "Black Bengal",
        count: "সুস্বাদু মাংস",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0WJDJWjTiUA7IY1ktZ2eejxRdyVNmqGKIQ&s",
      },
      {
        breed: "Jamuna Pari",
        count: "বড় আকৃতি",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8X4iywnsFojitCFv6-FFI-GOTWISUaZiyOA&s",
      },
    ].map((b, i) => (
      <div
        key={i}
        className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow transition"
      >
        <img
          src={b.img}
          alt={b.breed}
          className="w-full h-32 object-cover"
        />
        <div className="p-3 text-center">
          <h3 className="font-bold text-gray-800">{b.breed}</h3>
          <p className="text-green-600 text-xs mt-1">{b.count}</p>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
}