import { Users, BookOpen, Calendar, Award } from "lucide-react";

export const siteContent = {
    metadata: {
        title: "بيت الشعر - نواكشوط",
        description: "مؤسسة ثقافية وطنية",
    },
    assets: {
        logo: "/assets/beit/logo.png",
        heroPattern: "/assets/beit/hero-pattern.png",
        newsmsg: "/assets/beit/news-1.png",
        news2: "/assets/beit/news-2.png",
        news3: "/assets/beit/news-3.png",
        footerLogo: "/assets/beit/footer-logo.png",
    },
    navigation: [
        { href: "/", label: "الرئيسية" },
        { href: "#about", label: "عن البيت" },
        { href: "#news", label: "الأخبار" },
        { href: "#events", label: "الأجداث" }, // Note: Scraper didn't explicitly return menu items but this is standard. Keeping as is but updated label if needed.
        { href: "#contact", label: "اتصل بنا" },
    ],
    header: {
        title: "بيت الشعر",
        subtitle: "نواكشوط",
        cta: "انضم إلينا",
    },
    hero: {
        badge: "مؤسسة ثقافية وطنية",
        title: "بيت الشعر",
        highlight: "نواكشوط",
        description: "صون الموروث الشعري الموريتاني وإحياء التراث الأدبي العربي من خلال الأمسيات والندوات والإصدارات الثقافية",
        ctaPrimary: "الفعاليات القادمة",
        ctaSecondary: "استكشف الشعراء",
    },
    stats: [
        { icon: Users, value: "+120", label: "الشعراء" },
        { icon: Calendar, value: "25", label: "الأجندة" },
        { icon: BookOpen, value: "+500", label: "الأرشيف" }, // Mapping "Archive" to BookOpen
        { icon: Award, value: "45", label: "الإصدارات" }, // Mapping "Publications" to Award
    ],
    news: {
        sectionLabel: "آخر المستجدات",
        title: "أخبار وفعاليات بيت الشعر",
        viewAll: "عرض كل الأخبار",
        readMore: "اقرأ المزيد",
        items: [
            {
                id: 1,
                title: 'بيت الشعر نواكشوط ينظم ندوة حول "الرواية العربية: بين سلطة المركز وخصوصية الأطراف"',
                date: "15 يناير 2026",
                category: "ندوات",
                image: "/assets/beit/news-1.png",
                excerpt: 'نظم بيت الشعر نواكشوط مساء اليوم الخميس 15 يناير 2026، ندوة علمية ضمن برنامجه الثقافي "مقاربات نقدية"، حملت عنوان: "الرواية العربية: بين سلطة المركز وخصوصية الأطراف".',
            },
            {
                id: 2,
                title: "تجربتان شعريتان تغنيان للوطن والإنسان في تراتيل الأصيل",
                date: "01 يناير 2026",
                category: "أمسيات شعرية",
                image: "/assets/beit/news-2.png",
                excerpt: "نظم بيت الشعر نواكشوط أمسيّة شعريّة استضافت تجربتين شعريّتين تختلفان في الخلفيّة الثقافيّة وتتباينان في العمر والتّجربة، ضمن سلسلة تراتيل الأصيل.",
            },
            {
                id: 3,
                title: 'بيت الشعر ينظم ندوة حول "اللغة العربية والذكاء الاصطناعي" بمناسبة يومها العالمي',
                date: "18 ديسمبر 2025",
                category: "ندوات",
                image: "/assets/beit/news-3.png",
                excerpt: 'نظم بيت الشعر نواكشوط ندوة فكرية ضمن سلسلته "إشراقات علمية وثقافية" في إطار الاحتفالات المخلدة لليوم العالمي للغة العربية.',
            },
        ],
    },
    events: {
        sectionLabel: "رزنامة الأنشطة",
        title: "فعالياتنا القادمة",
        description: "لا تفوت فرصة الحضور والمشاركة في أنشطتنا المتنوعة. نقدم برنامجاً ثقافياً غنياً يغطي مختلف جوانب الأدب والفنون.",
        viewCalendar: "مشاهدة كامل الرزنامة",
        presenterLabel: "تقديم:",
        items: [
            {
                day: "05",
                month: "فبراير",
                title: "أمسية شعرية: أصوات من الصحراء",
                time: "19:00",
                location: "قاعة بيت الشعر الكبرى",
                presenters: "أحمد ولد محمد، فاطمة بنت سيدي",
            },
            {
                day: "10",
                month: "فبراير",
                title: "ورشة كتابة القصيدة الحرة",
                time: "16:00",
                location: "قاعة التدريب",
                presenters: "", // No presenter listed
            },
            {
                day: "15",
                month: "فبراير",
                title: "ندوة: الشعر والهوية الوطنية",
                time: "18:00",
                location: "قاعة المحاضرات",
                presenters: "د. محمد المختار، أ. خديجة بنت أحمد",
            },
            {
                day: "20",
                month: "فبراير",
                title: "حفل توقيع ديوان 'نجوى البادية'",
                time: "17:00",
                location: "مكتبة بيت الشعر",
                presenters: "عبد الله ولد محمود",
            },
        ],
    },
    footer: {
        about: {
            title: "بيت الشعر",
            text: "مؤسسة ثقافية وطنية تُعنى بالشعر والشعراء في موريتانيا، وتسعى للحفاظ على الموروث الشعري وتطويره.",
        },
        quickLinks: {
            title: "روابط سريعة",
            links: [
                { label: "عن المؤسسة", href: "#" },
                { label: "الأخبار والأنشطة", href: "#" },
                { label: "مكتبة الصور", href: "#" },
                { label: "اتصل بنا", href: "#" },
            ],
        },
        resources: {
            title: "موارد ومراجع",
            links: [
                { label: "الأرشيف الأدبي", href: "#" },
                { label: "إصداراتنا", href: "#" },
                { label: "مجلة بيت الشعر", href: "#" },
                { label: "الانضمام للعضوية", href: "#" },
            ],
        },
        contact: {
            title: "معلومات الاتصال",
            address: "ILOT V، شارع أبوبكر عند تقاطع ساموري توري، نواكشوط",
            phone: "+222 XX XX XX XX", // Placeholder in scraper result, keeping partial or finding real
            email: "mmed1772@gmail.com",
        },
        copyright: "© 2026 بيت الشعر - نواكشوط. جميع الحقوق محفوظة.",
    },
};
