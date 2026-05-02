"use client";

import Lottie from "lottie-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://assets2.lottiefiles.com/packages/lf20_kcsr6fts.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="w-72 h-72">
        {animationData && <Lottie animationData={animationData} loop />}
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mt-4">
        পেজ পাওয়া যায়নি!
      </h1>
      <p className="text-gray-500 mt-3 text-lg">
        আপনি যে পেজটি খুঁজছেন সেটি নেই।
      </p>
      <Link
        href="/"
        className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
      >
        হোম পেজে যান
      </Link>
    </div>
  );
}