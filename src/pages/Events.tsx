import { useState } from 'react';

const events = [
  {
    id: 1,
    title: 'تجارب مثمرة مع الشاعر والروائي الشيخ نوح',
    type: 'لقاء أدبي',
    date: '22 يناير 2026',
    time: '17:00',
    location: 'مقر بيت الشعر',
    day: 'الخميس',
  },
  {
    id: 2,
    title: 'مقاربات نقدية (الرواية العربية)',
    type: 'ندوة',
    date: '',
    time: '17:00',
    location: 'مقر بيت الشعر',
    day: 'الخميس',
  },
  {
    id: 3,
    title: 'اللغة العربية والحوسبة',
    type: 'ندوة',
    date: '',
    time: '17:30',
    location: 'مقر بيت الشعر',
    day: 'الخميس',
  },
  {
    id: 4,
    title: 'قضايا الشعر الحساني وعلاقته بالفصيح',
    type: 'ندوة',
    date: '',
    time: '17:30',
    location: 'مقر بيت الشعر',
    day: 'الخميس',
  },
  {
    id: 5,
    title: 'تراتيل الأصيل',
    type: 'أمسية شعرية',
    date: '',
    time: '17:30',
    location: 'مقر بيت الشعر',
    day: 'الخميس',
  },
  {
    id: 6,
    title: 'ملتقى الشارقة للتكريم الثقافي (17)',
    type: 'ملتقى',
    date: '',
    time: '11:00',
    location: 'قصر المؤتمرات',
    day: 'الأربعاء',
  },
  {
    id: 7,
    title: 'مهرجان نواكشوط للشعر العربي (الدورة 9)',
    type: 'مهرجان',
    date: '',
    time: '17:00',
    location: 'بيت الشعر',
    day: 'الثلاثاء',
  },
  {
    id: 8,
    title: 'ملتقى الشارقة للتكريم الثقافي (الدورة 4)',
    type: 'ملتقى',
    date: '17 يونيو',
    time: '10:00',
    location: 'قصر المؤتمرات',
    day: 'الاثنين',
  },
];

const years = ['2026', '2025', '2024'];
const types = ['أمسية شعرية', 'ندوة', 'ملتقى', 'مهرجان', 'لقاء أدبي'];

export function Events() {
  const [selectedYear, setSelectedYear] = useState('الكل');
  const [selectedType, setSelectedType] = useState('الكل');

  const filteredEvents = events.filter((event) => {
    const yearMatch = selectedYear === 'الكل' || event.date.includes(selectedYear);
    const typeMatch = selectedType === 'الكل' || event.type === selectedType;
    return yearMatch && typeMatch;
  });

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'أمسية شعرية': 'bg-blue-100 text-blue-700',
      'ندوة': 'bg-green-100 text-green-700',
      'ملتقى': 'bg-purple-100 text-purple-700',
      'مهرجان': 'bg-secondary/10 text-secondary',
      'لقاء أدبي': 'bg-pink-100 text-pink-700',
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الأجندة الثقافية</h1>
          <p className="text-xl opacity-90">اكتشف مواعيد وأماكن الفعاليات الثقافية والأدبية القادمة والماضية</p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          {/* Year Filter */}
          <div>
            <h3 className="font-bold mb-3">حسب السنة:</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedYear('الكل')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${selectedYear === 'الكل'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
              >
                الكل
              </button>
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

          {/* Type Filter */}
          <div>
            <h3 className="font-bold mb-3">حسب النوع:</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedType('الكل')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${selectedType === 'الكل'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
              >
                الكل
              </button>
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
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative"
            >
              {event.date && (
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-lg font-bold text-sm shadow-lg">
                  {event.date}
                </div>
              )}
              <div className="p-6 pt-16">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${getTypeColor(event.type)}`}>
                  {event.type}
                </span>
                <h3 className="text-xl font-bold mb-4 leading-relaxed">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">📅</span>
                    <span>{event.day}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">🕐</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📅</div>
            <p className="text-xl text-gray-600">لا توجد فعاليات تطابق الفلاتر المحددة</p>
          </div>
        )}
      </div>
    </div>
  );
}
