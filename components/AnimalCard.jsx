"use client";

import Link from "next/link";

export default function AnimalCard({ animal }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden border border-gray-100">
      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = "https://placehold.co/400x300/16a34a/white?text=Animal";
        }}
      />
      <div className="p-4">
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
          {animal.type}
        </span>
        <h3 className="font-bold text-gray-800 mt-2">{animal.name}</h3>
        <p className="text-gray-500 text-sm mt-1">
           {animal.location} •  {animal.weight} kg
        </p>
        <p className="text-green-600 font-bold text-lg mt-2">
          ৳ {animal.price.toLocaleString()}
        </p>
        <Link
          href={`/animals/${animal.id}`}
          className="block mt-3 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm font-medium"
        >
          Details দেখুন
        </Link>
      </div>
    </div>
  );
}