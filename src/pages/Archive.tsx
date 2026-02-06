export function Archive() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الأرشيف</h1>
          <p className="text-xl opacity-90">أرشيف شامل لفعاليات وأنشطة بيت الشعر</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-5xl font-bold text-primary mb-2">+500</div>
            <div className="text-gray-600 text-lg">فعالية مؤرشفة</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-5xl font-bold text-primary mb-2">+120</div>
            <div className="text-gray-600 text-lg">شاعر مشارك</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-5xl font-bold text-primary mb-2">15</div>
            <div className="text-gray-600 text-lg">سنة من النشاط</div>
          </div>
        </div>

        {/* Archive Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">عن الأرشيف</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                يضم أرشيف بيت الشعر بنواكشوط سجلاً شاملاً لجميع الفعاليات والأنشطة الثقافية التي نظمها البيت منذ تأسيسه في عام 2011.
              </p>
              <p>
                يشمل الأرشيف الأمسيات الشعرية، الندوات الأدبية، الورشات التكوينية، المهرجانات الشعرية، واللقاءات الأدبية مع الشعراء والأدباء.
              </p>
              <p>
                نعمل على توثيق وحفظ التراث الشعري الموريتاني من خلال تسجيلات صوتية ومرئية، ونصوص مكتوبة، وصور فوتوغرافية لجميع الفعاليات.
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/events"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-bold mb-2 text-primary">الفعاليات السابقة</h3>
              <p className="text-gray-600">تصفح جميع الفعاليات التي نظمها بيت الشعر</p>
            </a>

            <a
              href="/publications"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-2 text-primary">الإصدارات</h3>
              <p className="text-gray-600">اطلع على جميع إصدارات بيت الشعر</p>
            </a>

            <a
              href="/poets"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-2 text-primary">الشعراء المشاركون</h3>
              <p className="text-gray-600">قاعدة بيانات الشعراء الموريتانيين</p>
            </a>

            <a
              href="/news"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">📰</div>
              <h3 className="text-2xl font-bold mb-2 text-primary">الأخبار</h3>
              <p className="text-gray-600">أرشيف الأخبار والتغطيات الإعلامية</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
