export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
          <p className="text-xl opacity-90">بيت الشعر بنواكشوط - مؤسسة ثقافية وطنية</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary">رسالتنا</h2>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              بيت الشعر بنواكشوط مؤسسة ثقافية وطنية تأسست بهدف صون الموروث الشعري الموريتاني وتطويره، والعمل على إحياء التراث الأدبي العربي في بلاد شنقيط.
            </p>
            <p>
              نسعى من خلال أنشطتنا المتنوعة إلى توفير فضاء ثقافي راقٍ يجمع الشعراء والأدباء والمهتمين بالشعر العربي، ونعمل على تشجيع المواهب الشابة ورعايتها.
            </p>
            <p>
              يُعد بيت الشعر منصة للحوار الثقافي والتواصل بين الأجيال الشعرية المختلفة، ويسهم في تعزيز مكانة الشعر الموريتاني على المستويين العربي والدولي.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-2">+120</div>
              <div className="text-gray-600">شاعر مسجل</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-2">+500</div>
              <div className="text-gray-600">فعالية منظمة</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-2">45</div>
              <div className="text-gray-600">إصدار منشور</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-2">15</div>
              <div className="text-gray-600">سنة من العطاء</div>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary">تاريخنا</h2>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              تأسس بيت الشعر بنواكشوط في عام 2011 بمبادرة من مجموعة من الشعراء والمثقفين الموريتانيين الذين آمنوا بضرورة إنشاء مؤسسة تُعنى بالشعر والشعراء.
            </p>
            <p>
              منذ تأسيسه، أصبح بيت الشعر مركزاً ثقافياً محورياً في العاصمة نواكشوط، واستضاف المئات من الأمسيات الشعرية والندوات الأدبية والورشات التكوينية.
            </p>
            <p>
              حظي البيت باعتراف وتقدير على المستوى الوطني والعربي، وأقام شراكات ثقافية مع مؤسسات شعرية في مختلف الدول العربية.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">فريق العمل</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                ع
              </div>
              <h3 className="text-xl font-bold mb-1">د. عبد الله السيد</h3>
              <p className="text-gray-600">الرئيس</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-secondary to-secondary-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                ف
              </div>
              <h3 className="text-xl font-bold mb-1">أ. فاطمة بنت أحمد</h3>
              <p className="text-gray-600">مديرة البرامج الثقافية</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                أ
              </div>
              <h3 className="text-xl font-bold mb-1">أ. أحمد ولد عبد الله</h3>
              <p className="text-gray-600">مسؤول الأرشيف والتوثيق</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                خ
              </div>
              <h3 className="text-xl font-bold mb-1">أ. خديجة بنت محمد</h3>
              <p className="text-gray-600">مسؤولة العلاقات الخارجية</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Role Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">دورنا في المشهد الثقافي</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-primary">الحفاظ على التراث</h3>
              <p className="text-gray-600">
                توثيق وأرشفة الشعر الموريتاني بمختلف أجياله وأنماطه.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3 text-primary">رعاية المواهب</h3>
              <p className="text-gray-600">
                اكتشاف وتشجيع الشعراء الشباب وتوفير منصة لهم.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-primary">التواصل الثقافي</h3>
              <p className="text-gray-600">
                ربط الشعر الموريتاني بالمشهد الشعري العربي والعالمي.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
          <p className="mb-2">ILOT V، شارع أبوبكر عند تقاطع ساموري توري، نواكشوط</p>
          <p className="mb-4">
            <a href="mailto:mmed1772@gmail.com" className="hover:text-secondary transition-colors">
              mmed1772@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
