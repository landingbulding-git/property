export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-sm">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} GDN Ingatlanhálózat. Minden jog fenntartva.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Adatvédelmi nyilatkozat</a>
          <a href="#" className="hover:text-white transition-colors">Impresszum</a>
          <a href="#" className="hover:text-white transition-colors">Kapcsolat</a>
        </div>
      </div>
    </footer>
  );
}
