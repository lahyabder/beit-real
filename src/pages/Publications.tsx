import { useState } from 'react';

const publications = [
  {
    id: 1,
    title: 'الشعر الموريتاني: دراسة نقدية',
    category: 'دراسة',
    year: '2024',
    pages: 180,
  },
  {
    id: 2,
    title: 'همسات الواحة',
    category: 'ديوان شعري',
    year: '2024',
    pages: 150,
  },
  {
    id: 3,
    title: 'مختارات شعرية موريتانية',
    category: 'مختارات',
    year: '2023',
    pages: 200,
  },
  {
    id: 4,
    title: 'أصداء الصحراء',
    category: 'ديوان شعري',
    year: '2023',
    pages: 120,
  },
  {
    id: 5,
    title: 'نجوى البادية',
    category: 'ديوان شعري',
    year: '2023',
    pages: 140,
  },
  {
    id: 6,
    title: 'أنين الرمال',
    category: 'ديوان شعري',
    year: '2023',
    pages: 130,
  },
];

const types = ['الكل', 'ديوان شعري', 'دراسة', 'مختارات'];
const years = ['الكل', '2025', '2024', '2023'];

export function Publications() {
  const [selectedType, setSelectedType] = useState('الكل');
  const [selectedYear, setSelectedYear] = useState('الكل');

  const filteredPublications = publications.filter((pub) => {
    const matchesType = selectedType === 'الكل' || pub.category === selectedType;
    const matchesYear = selectedYear === 'الكل' || pub.year === selectedYear;
    return matchesType && matchesYear;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'ديوان شعري': 'bg-blue-100 text-blue-700',
      'دراسة': 'bg-green-100 text-green-700',
      'مختارات': 'bg-purple-100 text-purple-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الإصدارات</h1>
          <p className="text-xl opacity-90">دواوين ومنشورات بيت الشعر</p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          {/* Type Filter */}
          <div>
            <h3 className="font-bold mb-3">النوع:</h3>
            <div className="flex flex-wrap gap-3">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${selectedType === type
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Year Filter */}
          <div>
            <h3 className="font-bold mb-3">السنة:</h3>
            <div className="flex flex-wrap gap-3">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${selectedYear === year
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Publications Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative"
            >
              {/* Page Count Badge */}
              <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-lg font-bold text-sm shadow-lg z-10">
                {pub.pages} صفحة
              </div>

              {/* Cover */}
              <div className="h-64 bg-gradient-to-br from-primary via-primary-700 to-primary-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/hero-pattern.svg')] bg-repeat"></div>
                <div className="text-white text-center z-10 p-6">
                  <div className="text-6xl mb-4">📖</div>
                  <h3 className="text-2xl font-bold leading-relaxed">{pub.title}</h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getCategoryColor(pub.category)}`}>
                    {pub.category}
                  </span>
                  <span className="text-sm text-gray-500">{pub.year}</span>
                </div>
                <button className="w-full bg-primary hover:bg-primary-700 text-white py-3 rounded-lg font-bold transition-colors">
                  تحميل الإصدار
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-xl text-gray-600">لا توجد إصدارات تطابق الفلاتر المحددة</p>
          </div>
        )}
      </div>
    </div>
  );
}
