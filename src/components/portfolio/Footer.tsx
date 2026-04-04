const Footer = () => {
  return <footer className="mt-24 p-8 md:p-12 border-t-2 border-primary bg-primary text-primary-foreground">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h4 className="text-3xl font-serif italic mb-2">Avi Milgrom</h4>
          <p className="text-primary-foreground/60 text-sm">© 2026. All rights reserved.</p>
        </div>
        <button onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })} className="px-6 py-3 border-2 border-primary-foreground text-xs font-bold uppercase tracking-widest hover:bg-primary-foreground hover:text-primary transition-all">
          Back to top
        </button>
      </div>
    </footer>;
};
export default Footer;