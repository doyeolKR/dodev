import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

export default function ContactCard({
  icon: Icon,
  title,
  value,
}: ContactCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg  bg-white/5">
      <Icon className="w-8 h-8 mb-4 text-purple-400" />
      <h3 className="font-semibold mb-2 text-white">{title}</h3>
      <p className="text-muted-foreground">{value}</p>
    </div>
  );
}
