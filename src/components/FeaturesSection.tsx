import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: "🎮",
      title: "Уникальный геймплей",
      description:
        "Авторские моды, кастомные предметы и увлекательные квесты ждут вас",
    },
    {
      icon: "🏠",
      title: "Свободное строительство",
      description:
        "Создавайте удивительные постройки без ограничений на нашем сервере",
    },
    {
      icon: "💎",
      title: "Экономика сервера",
      description:
        "Торгуйте, зарабатывайте и развивайте свой бизнес в игровой экономике",
    },
    {
      icon: "⚡",
      title: "Стабильная работа",
      description: "99.9% аптайм, быстрая техподдержка и регулярные обновления",
    },
    {
      icon: "👥",
      title: "Дружное сообщество",
      description: "Присоединяйтесь к активному сообществу из тысяч игроков",
    },
    {
      icon: "🎁",
      title: "События и конкурсы",
      description: "Участвуйте в регулярных событиях и выигрывайте призы",
    },
  ];

  return (
    <section className="py-16 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-white mb-4">
            Почему стоит играть у нас? ✨
          </h2>
          <p className="text-xl text-slate-300">
            Откройте для себя мир безграничных возможностей
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
