import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="relative flex w-full items-center justify-between
  bg-accent px-6 py-4
  after:absolute after:bottom-0 after:left-0
  after:h-px after:w-full
  after:bg-gradient-to-r
  after:from-transparent
  after:via-white/70
  after:to-transparent">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex items-center gap-5">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/product" className="hover:underline">Products</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/console" className="hover:underline">Console</Link>
      </div>
    <div>
        <ThemeToggle />
    </div>
    </nav>
  );
};

export default Navbar;   