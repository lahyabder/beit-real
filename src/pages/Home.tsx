export function Home() {
    return (
        <div className="min-h-screen bg-light-bg">
            {/* Hero Section */}
            <div className="relative bg-dark text-white py-24 md:py-32 overflow-hidden min-h-screen flex items-center">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat"></div>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        بيت الشعر <span className="text-secondary">نواكشوط</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed">
                        مؤسسة ثقافية وطنية
                    </p>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
                        صون الموروث الشعري الموريتاني وإحياء التراث الأدبي العربي من خلال الأمسيات والندوات والإصدارات الثقافية.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a
                            href="/events"
                            className="bg-secondary hover:bg-secondary-600 text-dark px-8 py-3 rounded-lg font-bold transition-colors shadow-lg"
                        >
                            الفعاليات القادمة
                        </a>
                        <a
                            href="/poets"
                            className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg backdrop-blur-sm"
                        >
                            استكشف الشعراء
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-dark py-16 -mt-1">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center bg-white/5 backdrop-blur-sm border border-secondary/10 p-8 rounded-lg hover:bg-white/10 transition-all">
                            <div className="text-5xl font-bold text-secondary mb-2">+120</div>
                            <div className="text-white/80 text-lg">الشعراء</div>
                        </div>
                        <div className="text-center bg-white/5 backdrop-blur-sm border border-secondary/10 p-8 rounded-lg hover:bg-white/10 transition-all">
                            <div className="text-5xl font-bold text-secondary mb-2">25</div>
                            <div className="text-white/80 text-lg">الأجندة</div>
                        </div>
                        <div className="text-center bg-white/5 backdrop-blur-sm border border-secondary/10 p-8 rounded-lg hover:bg-white/10 transition-all">
                            <div className="text-5xl font-bold text-secondary mb-2">+500</div>
                            <div className="text-white/80 text-lg">الأرشيف</div>
                        </div>
                        <div className="text-center bg-white/5 backdrop-blur-sm border border-secondary/10 p-8 rounded-lg hover:bg-white/10 transition-all">
                            <div className="text-5xl font-bold text-secondary mb-2">45</div>
                            <div className="text-white/80 text-lg">الإصدارات</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest News Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">آخر الأخبار</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* News 1 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-primary to-primary-700"></div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">15/1/2026</div>
                                <h3 className="text-xl font-bold mb-2">ندوة الرواية العربية</h3>
                                <p className="text-gray-600 mb-4">
                                    حول "الرواية العربية: بين سلطة المركز وخصوصية الأطراف" بمشاركة أ.د محمد الأمين مولاي إبراهيم وأ.د محمد تتا.
                                </p>
                                <a href="/news/1" className="text-primary hover:text-primary-700 font-bold">
                                    اقرأ المزيد ←
                                </a>
                            </div>
                        </div>

                        {/* News 2 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-secondary to-secondary-700"></div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">1/1/2026</div>
                                <h3 className="text-xl font-bold mb-2">أمسية تراتيل الأصيل</h3>
                                <p className="text-gray-600 mb-4">
                                    استضافة أيوب النجاشي والقطب محمد الحسن.
                                </p>
                                <a href="/news/2" className="text-primary hover:text-primary-700 font-bold">
                                    اقرأ المزيد ←
                                </a>
                            </div>
                        </div>

                        {/* News 3 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800"></div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">18/12/2025</div>
                                <h3 className="text-xl font-bold mb-2">ندوة اللغة العربية والذكاء الاصطناعي</h3>
                                <p className="text-gray-600 mb-4">
                                    بمناسبة اليوم العالمي للغة العربية، بمشاركة د. أحمد محمد محمدن ود. حدمين إسلمو الشيخ.
                                </p>
                                <a href="/news/3" className="text-primary hover:text-primary-700 font-bold">
                                    اقرأ المزيد ←
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold mb-8">الفعاليات القادمة</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white border-r-4 border-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-sm text-gray-500 mb-2">5 فبراير، 19:00</div>
                        <h3 className="text-2xl font-bold mb-2">أمسية شعرية: "أصوات من الصحراء"</h3>
                        <p className="text-gray-600 mb-2">قاعة بيت الشعر الكبرى</p>
                    </div>

                    <div className="bg-white border-r-4 border-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-sm text-gray-500 mb-2">10 فبراير، 16:00</div>
                        <h3 className="text-2xl font-bold mb-2">ورشة عمل: "كتابة القصيدة الحرة"</h3>
                        <p className="text-gray-600 mb-2">قاعة التدريب</p>
                    </div>

                    <div className="bg-white border-r-4 border-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-sm text-gray-500 mb-2">15 فبراير، 18:00</div>
                        <h3 className="text-2xl font-bold mb-2">ندوة: "الشعر والهوية الوطنية"</h3>
                        <p className="text-gray-600 mb-2">قاعة المحاضرات</p>
                    </div>

                    <div className="bg-white border-r-4 border-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-sm text-gray-500 mb-2">20 فبراير، 17:00</div>
                        <h3 className="text-2xl font-bold mb-2">حفل توقيع: ديوان "نجوى البادية"</h3>
                        <p className="text-gray-600 mb-2">مكتبة بيت الشعر</p>
                    </div>
                </div>
            </div>

            {/* Featured Poet */}
            <div className="bg-gradient-to-br from-primary to-primary-800 text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center">شاعر الشهر</h2>
                    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
                        <div className="text-center mb-6">
                            <h3 className="text-3xl font-bold mb-2">محمد ولد أحمد يوره</h3>
                            <p className="text-xl opacity-90">شاعر موريتاني بارز</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary">5</div>
                                <div className="text-sm">دواوين</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary">23</div>
                                <div className="text-sm">مشاركة</div>
                            </div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg">
                            <p className="text-lg leading-relaxed text-center italic">
                                "يا رملةً حملت أسرار صحرائي .. وصنتِ ذكرى شبابي في مرايائي<br />
                                لا تحسبي أنني أنسى مرابعكم .. فأنتِ باقيةٌ في كل أشيائي"
                            </p>
                            <p className="text-sm text-center mt-4 opacity-75">من قصيدة "نجوى الرمال"</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Explore Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold mb-8 text-center">استكشف</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: 'قاعدة الشعراء', link: '/poets', icon: '👥' },
                        { title: 'أجندة الفعاليات', link: '/events', icon: '📅' },
                        { title: 'الأرشيف', link: '/archive', icon: '📚' },
                        { title: 'الإصدارات', link: '/publications', icon: '📖' },
                        { title: 'الأخبار', link: '/news', icon: '📰' },
                        { title: 'تواصل معنا', link: '/contact', icon: '✉️' },
                    ].map((item) => (
                        <a
                            key={item.link}
                            href={item.link}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
