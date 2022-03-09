import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}
