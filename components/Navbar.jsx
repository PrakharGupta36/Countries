import Link from "next/link";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Navbar() {
  let [toggle, setToggle] = useState(true);

  useEffect(() => {
    {
      toggle
        ? (document.body.className = "dark-mode")
        : (document.body.className = "light-mode");
    }
  });

  return (
    <nav>
      <ul>
        <div className='nav-logo'>
          <li>
            {" "}
            <Link href='/'> Where in the world </Link>{" "}
          </li>
        </div>
        <div className='nav-end'>
          <li onClick={() => setToggle(!toggle)} className='center-center'>
            {" "}
            {toggle ? <FiMoon /> : <BsSun />}{" "}
            {toggle ? "Dark Mode" : "Light Mode"}
          </li>
        </div>
      </ul>
    </nav>
  );
}
