import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PrivilegeCardProps {
  name: string;
  price: string;
  color: string;
  features: string[];
  popular: boolean;
}

export default function PrivilegeCard({
  name,
  price,
  color,
  features,
  popular,
}: PrivilegeCardProps) {
  const getColorClasses = (color: string) => {
    const colors = {
      gray: "border-slate-600 bg-slate-800",
      blue: "border-blue-500 bg-slate-800",
      purple:
        "border-purple-500 bg-gradient-to-b from-purple-900/50 to-slate-800",
      amber: "border-amber-500 bg-gradient-to-b from-amber-900/50 to-slate-800",
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  const getButtonColor = (color: string) => {
    const colors = {
      gray: "bg-slate-600 hover:bg-slate-700",
      blue: "bg-blue-600 hover:bg-blue-700",
      purple: "bg-purple-600 hover:bg-purple-700",
      amber: "bg-amber-600 hover:bg-amber-700",
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <Card
      className={`relative ${getColorClasses(color)} border-2 hover-scale transition-all duration-300 ${popular ? "scale-105" : ""}`}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black">
          Популярный
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-white font-montserrat">
          {name}
        </CardTitle>
        <div className="text-3xl font-bold text-amber-400">{price}</div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-slate-300">
              <Icon
                name="Check"
                size={16}
                className="text-green-400 mr-3 flex-shrink-0"
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full ${getButtonColor(color)} text-white font-semibold`}
        >
          <Icon name="ShoppingCart" size={16} />
          Купить ранг
        </Button>
      </CardContent>
    </Card>
  );
}
