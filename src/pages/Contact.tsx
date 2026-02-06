export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl opacity-90">نسعد بتواصلكم معنا</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">معلومات الاتصال</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-primary">📍</div>
                  <div>
                    <h3 className="font-bold mb-1">العنوان</h3>
                    <p className="text-gray-600 leading-relaxed">
                      ILOT V، شارع أبوبكر عند تقاطع ساموري توري<br />
                      نواكشوط، موريتانيا
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl text-primary">✉️</div>
                  <div>
                    <h3 className="font-bold mb-1">البريد الإلكتروني</h3>
                    <a
                      href="mailto:mmed1772@gmail.com"
                      className="text-primary hover:text-primary-700 transition-colors"
                    >
                      mmed1772@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl text-primary">🕐</div>
                  <div>
                    <h3 className="font-bold mb-1">ساعات العمل</h3>
                    <p className="text-gray-600">
                      السبت - الخميس: 9:00 صباحاً - 5:00 مساءً<br />
                      الجمعة: مغلق
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">أرسل رسالة</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">الاسم</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="اسمك الكامل"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">الموضوع</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="موضوع الرسالة"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">الرسالة</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-700 text-white py-3 rounded-lg font-bold transition-colors"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-6 text-primary">تابعنا على وسائل التواصل الاجتماعي</h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="#"
                className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl transition-colors"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl transition-colors"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center text-2xl transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center text-2xl transition-colors"
                aria-label="YouTube"
              >
                ▶️
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
