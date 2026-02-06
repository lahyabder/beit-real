export function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary to-primary-700 text-white py-24 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        بيت الشعر نواكشوط
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                        مؤسسة ثقافية وطنية تُعنى بالشعر والشعراء في موريتانيا، وتسعى للحفاظ على الموروث الشعري وتطويره
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="/about" className="bg-secondary hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                            اكتشف المزيد
                        </a>
                        <a href="/poets" className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-lg font-bold transition-colors">
                            قاعدة الشعراء
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="text-5xl font-bold text-primary mb-2">120+</div>
                        <div className="text-gray-600 text-lg">الشعراء</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-primary mb-2">25</div>
                        <div className="text-gray-600 text-lg">الأجندة</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-primary mb-2">500+</div>
                        <div className="text-gray-600 text-lg">الأرشيف</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-primary mb-2">45</div>
                        <div className="text-gray-600 text-lg">الإصدارات</div>
                    </div>
                </div>
            </div>

            {/* Latest News Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">آخر الأخبار</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="h-48 bg-gray-200"></div>
                                <div className="p-6">
                                    <div className="text-sm text-gray-500 mb-2">منذ يومين</div>
                                    <h3 className="text-xl font-bold mb-2">عنوان الخبر {i}</h3>
                                    <p className="text-gray-600 mb-4">وصف مختصر للخبر...</p>
                                    <a href={`/news/${i}`} className="text-primary hover:text-primary-700 font-bold">
                                        اقرأ المزيد ←
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold mb-8">الفعاليات القادمة</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-white border-r-4 border-secondary p-6 rounded-lg shadow">
                            <div className="text-sm text-gray-500 mb-2">15 فبراير 2024</div>
                            <h3 className="text-2xl font-bold mb-2">فعالية ثقافية {i}</h3>
                            <p className="text-gray-600">وصف الفعالية...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
