import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-green-500">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-montserrat text-white mb-8">
          IP сервера: play.craftworld.ru
        </h2>

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
