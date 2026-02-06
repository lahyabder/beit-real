import { useState } from 'react';

const newsArticles = [
  {
    id: 1,
    title: 'بيت الشعر نواكشوط ينظم ندوة حول "الرواية العربية: بين سلطة المركز وخصوصية الأطراف"',
    date: '15 يناير 2026',
    category: 'ندوات',
    description: 'ندوة علمية ضمن برنامج "مقاربات نقدية" بمشاركة أ.د محمد الأمين مولاي إبراهيم و أ.د محمد تتا.',
  },
  {
    id: 2,
    title: 'تجربتان شعريتان تغنيان للوطن والإنسان في تراتيل الأصيل',
    date: '01 يناير 2026',
    category: 'أمسيات شعرية',
    description: 'أمسية استضافت الشاعرين أيوب النجاشي والقطب محمد الحسن.',
  },
  {
    id: 3,
    title: 'بيت الشعر ينظم ندوة حول "اللغة العربية والذكاء الاصطناعي" بمناسبة يومها العالمي',
    date: '18 ديسمبر 2025',
    category: 'ندوات',
    description: 'ندوة فكرية ضمن سلسلة "إشراقات علمية وثقافية" بمشاركة د. أحمد محمد محمدن ود. حدمين إسلمو الشيخ.',
  },
];

const categories = ['الكل', 'ندوات', 'أمسيات شعرية', 'إصدارات', 'ورشات', 'ضيوف', 'اتفاقيات'];

export function News() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const filteredNews = selectedCategory === 'الكل'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الأخبار</h1>
          <p className="text-xl opacity-90">تابع آخر أخبار وأنشطة بيت الشعر بنواكشوط</p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center">
                <div className="text-white text-6xl">📰</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full font-bold">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-relaxed">{article.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
                <a
                  href={`/news/${article.id}`}
                  className="text-primary hover:text-primary-700 font-bold inline-flex items-center gap-2"
                >
                  اقرأ المزيد ←
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-xl text-gray-600">لا توجد أخبار في هذا التصنيف</p>
          </div>
        )}
      </div>
    </div>
  );
}
