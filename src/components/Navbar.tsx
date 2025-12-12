import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="border-b border-primary/20 sticky top-0 z-50 backdrop-blur-md bg-background/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-primary group transition-colors">
                            <span className="group-hover:text-accent">Lincoln's Blog</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="text-foreground/80 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Home
                            </Link>
                            <Link href="/blog" className="text-foreground/80 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Blog
                            </Link>
                            <Link href="/contact" className="text-foreground/80 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                    {/* Mobile menu button could go here */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
