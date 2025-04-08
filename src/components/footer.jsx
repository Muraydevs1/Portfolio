import React from "react";

function Footer() {
  return (
    <footer className="py-6  text-gray-400 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} All Rights Reserved | @muray_dev
      </p>
    </footer>
  );
}

export default Footer;