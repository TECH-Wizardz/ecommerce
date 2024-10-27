import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
function Navbar() {
  return (
    <div className="flex w-full gap-10 items-center ">
      <img
        className="w-32"
        src="https://www.plug.tech/cdn/shop/files/plug_-logo-white.png?v=1718673435&%3Bwidth=240&em-format=avif&em-width=240"
      />
      <div className="flex gap-10 justify-center flex-1 text-md text-white font-bold">
        <a>Apple</a>
        <a>Android</a>
        <a>iPhone</a>
        <a>MacBook</a>
        <a>iPad</a>
        <a>Watch</a>
        <a>headphones</a>
      </div>
      <div className="flex gap-4 text-white">
        <MagnifyingGlassIcon className="w-6" />
        <UserIcon className="w-6" />
        <ShoppingBagIcon className="w-6" />
      </div>
    </div>
  );
}

export default Navbar;
