
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { use } from "react";

export default function ProductCard({ products }) {
  const pro = use(products);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {pro.map((elem) => (
        <Card
          key={elem.id}
          className="relative mx-auto w-full max-w-sm overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={elem.image}
              alt={elem.title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <Badge
              variant="secondary"
              className="absolute right-3 top-3 z-10"
            >
              ${elem.price}
            </Badge>
          </div>

          <CardHeader>
            <CardTitle className="line-clamp-2">
              {elem.title}
            </CardTitle>
            <CardDescription className="capitalize">
              {elem.category}
            </CardDescription>
          </CardHeader>

          <CardFooter>
            <Button className="w-full">Shop now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
