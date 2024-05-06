import { Badge } from "@/components/ui/badge";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { CardProps } from "@/types/cardProps";

const Card = ({ title, description, badge }: CardProps) => {
  return (
    <div className="card border border-black/[0.2] dark:border-white/[0.2] bg-background flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-[13.2rem] -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 bottom-[11.7rem] -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-[13.2rem] -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 bottom-[11.7rem] -right-3 dark:text-white text-black" />
      <EvervaultCard text={title} />
      <h3 className="text-black dark:text-white mt-4 text-sm font-light">
        {description}
      </h3>
      <Badge className="mt-4">{badge}</Badge>
    </div>
  );
};

export default Card;
