export function Reports() {
    const reports = [
        {
            year: 2025,
            title: 'صدى بيت الشعر 2025',
            image: '/assets/reports/report-cover-2025.jpg',
            size: '2.5 MB',
            type: 'PDF',
        },
        {
            year: 2024,
            title: 'صدى بيت الشعر 2024',
            image: '/assets/reports/report-cover-2024.jpg',
            size: '2.3 MB',
            type: 'PDF',
        },
        {
            year: 2023,
            title: 'صدى بيت الشعر 2023',
            image: '/assets/reports/report-cover-2023.jpg',
            size: '2.1 MB',
            type: 'PDF',
        },
        {
            year: 2022,
            title: 'صدى بيت الشعر 2022',
            image: '/assets/reports/report-cover-2022.jpg',
            size: '1.9 MB',
            type: 'PDF',
        },
        {
            year: 2021,
            title: 'صدى بيت الشعر 2021',
            image: '/assets/reports/report-cover-2021.jpg', // CORRECTED IMAGE
            size: '1.8 MB',
            type: 'PDF',
        },
        {
            year: 2020,
            title: 'صدى بيت الشعر 2020',
            image: '/assets/reports/report-cover-2020.jpg', // CORRECTED IMAGE
            size: '1.7 MB',
            type: 'PDF',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-primary text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">إنجازات بيت الشعر</h1>
                    <p className="text-xl opacity-90">التقارير السنوية والإحصائيات</p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <div className="text-4xl font-bold text-primary mb-2">48+</div>
                        <div className="text-gray-600">فعالية</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <div className="text-4xl font-bold text-primary mb-2">120+</div>
                        <div className="text-gray-600">شاعر</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <div className="text-4xl font-bold text-primary mb-2">500+</div>
                        <div className="text-gray-600">أرشيف</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <div className="text-4xl font-bold text-primary mb-2">45</div>
                        <div className="text-gray-600">إصدار</div>
                    </div>
                </div>

                {/* Reports Grid */}
                <h2 className="text-3xl font-bold mb-8">أرشيف التقارير السابقة</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reports.map((report) => (
                        <div key={report.year} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="aspect-[3/4] bg-gray-200">
                                {report.image && (
                                    <img
                                        src={report.image}
                                        alt={report.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                    <span>{report.type}</span>
                                    <span>{report.size}</span>
                                </div>
                                <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition-colors">
                                    تحميل التقرير
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
