import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: "🎮",
      title: "Уникальные команды",
      description:
        "Получите доступ к эксклюзивным командам для улучшения игрового опыта",
    },
    {
      icon: "🏠",
      title: "Приватные территории",
      description: "Создавайте и защищайте свои постройки от других игроков",
    },
    {
      icon: "💎",
      title: "Эксклюзивные предметы",
      description:
        "Получайте редкие ресурсы и инструменты недоступные обычным игрокам",
    },
    {
      icon: "⚡",
      title: "Быстрое передвижение",
      description: "Телепортация, полеты и другие способы быстрого перемещения",
    },
    {
      icon: "👥",
      title: "VIP сообщество",
      description:
        "Присоединяйтесь к закрытому сообществу привилегированных игроков",
    },
    {
      icon: "🎁",
      title: "Ежедневные бонусы",
      description: "Получайте эксклюзивные киты и награды каждый день",
    },
  ];

  return (
    <section className="py-16 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-white mb-4">
            Преимущества привилегий ✨
          </h2>
          <p className="text-xl text-slate-300">
            Откройте для себя мир новых возможностей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover-scale"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-white font-montserrat">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
