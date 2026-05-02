import Link from "next/link";
import { SiHappycow } from "react-icons/si";
export default function Footer() {

  return (
    <footer className="bg-green-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
             <div className="w-32 h-32 bg-gradient-to-br from-gold to-gold-light rounded-3xl flex items-center justify-center">
              <SiHappycow size={72} color="#1a1200" />
             </div>
          <h3 className="text-xl font-bold mb-3"> QurbaniHat</h3>
          <p className="text-green-200 text-sm">
            বাংলাদেশের সেরা অনলাইন কুরবানির পশুর হাট। বিশ্বস্ততার সাথে সেবা দিয়ে আসছি।
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-green-200 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/animals" className="hover:text-white">All Animals</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
            <li><Link href="/register" className="hover:text-white">Register</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-green-200 text-sm">
            <li> +880 1700-000000</li>
            <li> info@qurbanihat.com</li>
            <li> Dhaka, Bangladesh</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-green-600 px-3 py-1 rounded text-sm hover:bg-green-500">Facebook</a>
            <a href="#" className="bg-green-600 px-3 py-1 rounded text-sm hover:bg-green-500">YouTube</a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-green-700 text-green-300 text-sm">
        © 2024 QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
}