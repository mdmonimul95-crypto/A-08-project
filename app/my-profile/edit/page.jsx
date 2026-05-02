"use client";

import { useState, useEffect } from "react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function EditProfile() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session?.user) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authClient.updateUser({
        name: name || session.user.name,
        image: image || session.user.image,
      });
      toast.success("Profile updated successfully!");
      router.push("/my-profile");
    } catch (err) {
      toast.error("Update failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      <Link
        href="/my-profile"
        className="text-green-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Profile
      </Link>

      <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Update Information
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          নাম ও ছবি আপডেট করুন।
        </p>

        
        <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
          {session.user.image ? (
            <img
              src={session.user.image}
              alt={session.user.name}
              className="w-14 h-14 rounded-full object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-xl font-bold">
              {session.user.name?.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-800">{session.user.name}</p>
            <p className="text-gray-500 text-sm">{session.user.email}</p>
          </div>
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={session.user.name}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Photo URL
            </label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder={session.user.image || "https://your-photo-url.com"}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
}