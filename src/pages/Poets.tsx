import { useState } from 'react';

const poets = [
  { id: 1, name: 'محمد ولد أحمد يورة', years: '1845 - 1925', generation: 'القرن التاسع عشر', style: 'الشعر الكلاسيكي', location: 'إگيدي', publications: 1 },
  { id: 2, name: 'أحمد ولد عبد القادر', years: '1941', generation: 'الحديث', style: 'الشعر الحديث', location: 'بوتلميت', publications: 5 },
  { id: 3, name: 'ابن رزقة', years: '', generation: 'الكلاسيكي', style: 'الشعر الكلاسيكي', location: '', publications: 0 },
  { id: 4, name: 'محنض بابه بن اعبيد', years: '', generation: 'الكلاسيكي', style: 'الشعر الكلاسيكي', location: '', publications: 0 },
  { id: 5, name: 'سدوم ولد انجرتو', years: '', generation: 'الكلاسيكي', style: 'الشعر الكلاسيكي', location: '', publications: 0 },
  { id: 6, name: 'الشيخ أحمد البان', years: '', generation: 'الكلاسيكي', style: 'الشعر الصوفي', location: '', publications: 0 },
  { id: 7, name: 'المختار سالم', years: '', generation: 'المعاصر', style: 'الشعر الحديث', location: '', publications: 0 },
  { id: 8, name: 'ناجي محمد الإمام', years: '', generation: 'المعاصر', style: 'الشعر الحديث', location: '', publications: 0 },
  { id: 9, name: 'محمد الحافظ ولد أحمدو', years: '', generation: 'المعاصر', style: 'الشعر الحديث', location: '', publications: 0 },
  { id: 10, name: 'محمد فاضل ولد عبد اللطيف', years: '', generation: 'المعاصر', style: 'الشعر الكلاسيكي', location: '', publications: 0 },
  { id: 11, name: 'جمال ولد الحسن', years: '', generation: 'المعاصر', style: 'الشعر الحديث', location: '', publications: 0 },
  { id: 12, name: 'حمدا ولد التاه', years: '', generation: 'المعاصر', style: 'الشعر الحديث', location: '', publications: 0 },
  { id: 13, name: 'محمد بابا حامد', years: '', generation: 'المعاصر', style: 'الشعر الحديث', location: '', publications: 0 },
  { id: 14, name: 'فاضل أمين', years: '', generation: 'المعاصر', style: 'الشعر الحديث', location: '', publications: 0 },
  { id: 15, name: 'غالي مختار فال البصادي', years: '', generation: 'المعاصر', style: 'الشعر الكلاسيكي', location: '', publications: 0 },
  { id: 16, name: 'أحمد التجاني بن بابا العلوي', years: '', generation: 'الكلاسيكي', style: 'الشعر الصوفي', location: '', publications: 0 },
  { id: 17, name: 'سيدي محمد بن الشيخ سيديا', years: '', generation: 'الكلاسيكي', style: 'الشعر الصوفي', location: '', publications: 0 },
  { id: 18, name: 'محمد الأمين بن الشيخ المعلوم', years: '', generation: 'الكلاسيكي', style: 'الشعر الكلاسيكي', location: '', publications: 0 },
  { id: 19, name: 'المصطفى بن معاوية التندغي', years: '', generation: 'الكلاسيكي', style: 'الشعر الكلاسيكي', location: '', publications: 0 },
  { id: 20, name: 'أبوه ولد الأسياد', years: '', generation: 'الكلاسيكي', style: 'الشعر الكلاسيكي', location: '', publications: 0 },
];

const generations = ['الكل', 'الكلاسيكي', 'الحديث', 'المعاصر', 'القرن التاسع عشر'];
const styles = ['الكل', 'الشعر الكلاسيكي', 'الشعر الحديث', 'الشعر الصوفي'];

export function Poets() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGeneration, setSelectedGeneration] = useState('الكل');
  const [selectedStyle, setSelectedStyle] = useState('الكل');

  const filteredPoets = poets.filter((poet) => {
    const matchesSearch = poet.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGeneration = selectedGeneration === 'الكل' || poet.generation === selectedGeneration;
    const matchesStyle = selectedStyle === 'الكل' || poet.style === selectedStyle;
    return matchesSearch && matchesGeneration && matchesStyle;
  });

  const getInitial = (name: string) => {
    return name.charAt(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">قاعدة الشعراء الموريتانيين</h1>
          <p className="text-xl opacity-90">سجل شامل للشعراء الموريتانيين من ويكيبيديا العربية</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="ابحث عن شاعر..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-96 px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none text-lg"
            />
          </div>

          {/* Generation Filter */}
          <div>
            <h3 className="font-bold mb-3">الجيل:</h3>
            <div className="flex flex-wrap gap-3">
              {generations.map((generation) => (
                <button
                  key={generation}
                  onClick={() => setSelectedGeneration(generation)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${selectedGeneration === generation
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                    }`}
                >
                  {generation}
                </button>
              ))}
            </div>
          </div>

          {/* Style Filter */}
          <div>
            <h3 className="font-bold mb-3">الأسلوب:</h3>
            <div className="flex flex-wrap gap-3">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${selectedStyle === style
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                    }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Poets Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPoets.map((poet) => (
            <div
              key={poet.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-700 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {getInitial(poet.name)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 leading-relaxed">{poet.name}</h3>
                  {poet.years && <p className="text-sm text-gray-500">{poet.years}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                  {poet.generation}
                </span>
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold mr-2">
                  {poet.style}
                </span>
                {poet.location && (
                  <div className="flex items-center gap-2 text-gray-600 mt-3">
                    <span>📍</span>
                    <span className="text-sm">{poet.location}</span>
                  </div>
                )}
                {poet.publications > 0 && (
                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <span>📚</span>
                    <span className="text-sm">{poet.publications} إصدار</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredPoets.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-600">لم يتم العثور على شعراء يطابقون البحث</p>
          </div>
        )}
      </div>
    </div>
  );
}
