import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'الرئيسية' },
        { path: '/about', label: 'من نحن' },
        { path: '/news', label: 'الأخبار' },
        { path: '/events', label: 'الأجندة' },
        { path: '/poets', label: 'الشعراء' },
        { path: '/archive', label: 'الأرشيف' },
        { path: '/publications', label: 'الإصدارات' },
        { path: '/reports', label: 'التقارير' },
        { path: '/contact', label: 'اتصل بنا' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="text-2xl font-bold text-primary">
                            بيت الشعر - نواكشوط
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="text-gray-700 hover:text-primary transition-colors font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden py-4 border-t">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
