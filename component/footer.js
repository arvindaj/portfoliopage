// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        {/* Add social media links here */}
      </footer>
    );
  }