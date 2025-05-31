import PrivilegeCard from "@/components/PrivilegeCard";

export default function PrivilegesSection() {
  const privileges = [
    {
      name: "Игрок",
      price: "Бесплатно",
      color: "gray",
      features: [
        "Стандартные команды",
        "Доступ к публичным мирам",
        "Чат без ограничений",
      ],
      popular: false,
    },
    {
      name: "VIP",
      price: "299₽",
      color: "blue",
      features: [
        "Приватный дом 20x20",
        "/kit vip каждые 24ч",
        "Цветной ник в чате",
        "Приоритет входа на сервер",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "599₽",
      color: "purple",
      features: [
        "Приватный дом 40x40",
        "/kit premium каждые 12ч",
        "Эффекты частиц",
        "/fly в лобби",
        "Доступ к VIP аренам",
      ],
      popular: true,
    },
    {
      name: "Legendary",
      price: "999₽",
      color: "amber",
      features: [
        "Приватный дом 60x60",
        "/kit legendary каждые 6ч",
        "Кастомные префиксы",
        "/gamemode creative",
        "Создание варпов",
        "Модераторские команды",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-white mb-4">
            Выберите свой ранг 👑
          </h2>
          <p className="text-xl text-slate-300">
            Каждый ранг открывает новые возможности для игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {privileges.map((privilege, index) => (
            <PrivilegeCard key={index} {...privilege} />
          ))}
        </div>
      </div>
    </section>
  );
}
