import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary text-white mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-secondary transition-colors">من نحن</Link></li>
                            <li><Link to="/news" className="hover:text-secondary transition-colors">الأخبار</Link></li>
                            <li><Link to="/events" className="hover:text-secondary transition-colors">الأجندة</Link></li>
                            <li><Link to="/poets" className="hover:text-secondary transition-colors">الشعراء</Link></li>
                        </ul>
                    </div>

                    {/* House Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">معلومات البيت</h3>
                        <ul className="space-y-2">
                            <li><Link to="/archive" className="hover:text-secondary transition-colors">الأرشيف</Link></li>
                            <li><Link to="/publications" className="hover:text-secondary transition-colors">الإصدارات</Link></li>
                            <li><Link to="/reports" className="hover:text-secondary transition-colors">التقارير</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary transition-colors">اتصل بنا</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">تابعنا</h3>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-secondary transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="hover:text-secondary transition-colors">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="hover:text-secondary transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="hover:text-secondary transition-colors">
                                <Youtube size={24} />
                            </a>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm">بالشراكة مع</p>
                            <a href="#" className="text-secondary hover:underline">ESKI</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-8 text-center">
                    <p className="text-sm">© 2024 بيت الشعر - نواكشوط. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
}
