import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-emerald-600 to-green-500 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <h1 className="text-5xl font-bold font-montserrat mb-4">
            🏰 CraftWorld Магазин
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Получите эксклюзивные привилегии и станьте легендой нашего сервера!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
          >
            <Icon name="Crown" size={20} />
            Выбрать ранг
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-emerald-600"
          >
            <Icon name="Users" size={20} />О сервере
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-lg font-semibold">Мгновенная активация</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-lg font-semibold">Безопасные платежи</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-lg font-semibold">24/7 поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
}
