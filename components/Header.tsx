import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 py-3',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-foreground hover:text-[#0f6861] transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/#why"
                className="text-foreground hover:text-[#0f6861] transition-colors font-medium"
              >
                Why
              </Link>
              <Link
                href="/#jobcard"
                className="text-foreground hover:text-[#0f6861] transition-colors font-medium"
              >
                JobCard
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-[#0f6861] transition-colors font-medium"
              >
                Contact
              </Link>
              <Link
                href="/workshops"
                className="text-foreground hover:text-[#0f6861] transition-colors font-medium"
              >
                Workshops
              </Link>
            </nav>
            <Button className="bg-[#0f6861] hover:bg-[#0a524c]">
              Schedule Interview
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-20">
          <div className="container px-4">
            <nav className="flex flex-col space-y-6 py-8">
              <Link
                href="/"
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/#why"
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                Why
              </Link>
              <Link
                href="/#jobcard"
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                JobCard
              </Link>
              <Link
                href="/contact"
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                href="/workshops"
                className="text-xl font-medium"
                onClick={toggleMenu}
              >
                Workshops
              </Link>
              <Button 
                className="bg-[#0f6861] hover:bg-[#0a524c] w-full mt-4"
                onClick={toggleMenu}
              >
                Schedule Interview
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}