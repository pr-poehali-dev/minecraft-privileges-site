import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-emerald-600 to-green-500 text-white py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold font-montserrat mb-6">
            🏰 CraftWorld Сервер
          </h1>
          <p className="text-2xl text-emerald-100 mb-8">
            Проходка всего за 100₽
          </p>
        </div>

        <Button
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-8 py-4"
        >
          <Icon name="ShoppingCart" size={24} />
          Купить проходку 100₽
        </Button>
      </div>
    </section>
  );
}
