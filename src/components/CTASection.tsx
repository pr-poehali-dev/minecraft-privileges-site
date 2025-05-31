import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function CTASection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-emerald-600 to-green-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-montserrat text-white mb-6">
          Готовы присоединиться? 🚀
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Всего 100₽ — и вы получаете пожизненный доступ к нашему уникальному
          серверу с тысячами довольных игроков!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
          >
            <Icon name="ShoppingCart" size={20} />
            Купить проходку 100₽
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-emerald-600"
          >
            <Icon name="MessageCircle" size={20} />
            Связаться с поддержкой
          </Button>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <p className="text-emerald-100 mb-4">
            <strong>IP сервера:</strong> play.craftworld.ru
          </p>
          <p className="text-emerald-100">
            <strong>Версия:</strong> 1.20.x | <strong>Онлайн:</strong> 247
            игроков
          </p>
        </div>
      </div>
    </section>
  );
}
