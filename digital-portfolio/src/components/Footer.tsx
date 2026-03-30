export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-12 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
          <span className="text-white font-bold text-xl tracking-wider">DevPort<span className="text-indigo-400">.</span></span>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
