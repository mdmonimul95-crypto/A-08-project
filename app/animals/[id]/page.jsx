"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import animals from "@/data/animals";
import toast from "react-hot-toast";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

export default function AnimalDetails() {
  const { id } = useParams();
  const { data: session } = useSession();
  const router = useRouter();

  const animal = animals.find((a) => a.id === parseInt(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  if (!animal) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">পশু পাওয়া যায়নি!</h2>
        <Link href="/animals" className="text-green-600 mt-4 inline-block hover:underline">
          ← সব পশু দেখুন
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!session?.user) {
      toast.error("বুকিং করতে আগে Login করুন!");
      router.push("/login");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("বুকিং সফল হয়েছে! আমরা শীঘ্রই যোগাযোগ করবো।");
    setForm({ name: "", email: "", phone: "", address: "" });
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Back */}
      <Link
        href="/animals"
        className="text-green-600 hover:underline text-sm mb-6 inline-block"
      >
        ← সব পশু দেখুন
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Details */}
        <div>
          <img
            src={animal.image}
            alt={animal.name}
            className="w-full h-72 object-cover rounded-2xl shadow"
          />
          <div className="mt-6 bg-white rounded-2xl shadow p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-2xl font-bold text-gray-800">{animal.name}</h1>
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                {animal.type}
              </span>
            </div>
            <p className="text-green-600 font-bold text-2xl mb-4">
              ৳ {animal.price.toLocaleString()}
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="font-medium text-gray-800">জাত</span>
                <p>{animal.breed}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="font-medium text-gray-800">ওজন</span>
                <p>{animal.weight} kg</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="font-medium text-gray-800">বয়স</span>
                <p>{animal.age} বছর</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="font-medium text-gray-800">অবস্থান</span>
                <p>{animal.location}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {animal.description}
            </p>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 h-fit">
          <h2 className="text-xl font-bold text-gray-800 mb-1">বুকিং করুন</h2>
          <p className="text-gray-500 text-sm mb-6">
            নিচের ফর্মটি পূরণ করুন, আমরা যোগাযোগ করবো।
          </p>

          {!session?.user && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4 text-sm text-yellow-700">
              বুকিং করতে{" "}
              <Link href="/login" className="font-semibold underline">
                Login
              </Link>{" "}
              করুন।
            </div>
          )}

          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                আপনার নাম
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="পূর্ণ নাম লিখুন"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ইমেইল
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ফোন নম্বর
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ঠিকানা
              </label>
              <textarea
                name="address"
                required
                value={form.address}
                onChange={handleChange}
                placeholder="সম্পূর্ণ ঠিকানা লিখুন"
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? "বুকিং হচ্ছে..." : "বুকিং নিশ্চিত করুন"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}