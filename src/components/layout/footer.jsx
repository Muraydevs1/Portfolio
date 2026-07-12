import React from "react";

function Footer() {
  return (
    <footer className="py-6 text-neutral-500 dark:text-neutral-400 text-center border-t border-neutral-200/60 dark:border-white/10">
      <p className="text-sm">
        © {new Date().getFullYear()} All Rights Reserved | @muray_dev
      </p>
    </footer>
  );
}

export default Footer;