import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div
      style={{ backgroundColor: "white", width: "100%", height: "100%" }}
      className="rounded-3, p-3"
    >
      <div
        className="d-flex gap-5 justify-content-center"
        style={{ fontSize: 30 }}
      >
        <Link href="/">
          <span> Home </span>
        </Link>
        <Link href="Exp">
          <span> Experience </span>
        </Link>
        <Link href="Contact">
          <span> Contact </span>
        </Link>
        <Link href="Lab-07">
          <span> Lab-07 </span>
        </Link>
      </div>
    </div>
  );
}
