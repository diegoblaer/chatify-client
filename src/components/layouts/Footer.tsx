"use client";

import Link from "next/link";
import Typography from "../common/Typography";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-4 md:py-8">
      <Typography variant="xsmall" as="div" className="text-light-gray-variant">
        by{" "}
        <Link
          className="hover:text-light-blue"
          href={"https://github.com/diegoblaer"}
        >
          @diegoblaer
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
