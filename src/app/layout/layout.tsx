import { NavLink, Outlet } from "react-router";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "font-bold text-green-700" : "hover:text-green-600";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex border-b border-gray-200 px-6 py-8">
        <nav className="flex gap-5">
          <NavLink to="/" end className={navLinkClass}>
            Inicio
          </NavLink>
          <NavLink to="/books" className={navLinkClass}>
            Libros
          </NavLink>
          <NavLink to="/cart" className={navLinkClass}>
            Carrito
          </NavLink>
          <NavLink to="/profile" className={navLinkClass}>
            Perfil
          </NavLink>
        </nav>
      </header>

      <main className="flex flex-1 flex-col max-w-4xl w-full mx-auto px-6 py-9">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 text-center text-gray-600 p-6">
        Copyright 2026 - Todos los derechos reservados
      </footer>
    </div>
  );
}
