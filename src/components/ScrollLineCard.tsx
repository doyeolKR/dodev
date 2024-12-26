interface ScrollLineCardProps {
  index: number;
  imageName: string;
  title: string;
  desc: string;
}

export default function ScrollLineCard({
  index,
  imageName,
  title,
  desc,
}: ScrollLineCardProps) {
  return (
    <div
      className={`scroll-line-card-${index} flex ${
        index % 2 !== 0 ? "flex-row-reverse" : ""
      } items-center justify-between py-24`}
    >
      <div className="relative left-content w-1/2 flex justify-center">
        <img className="rounded-xl" src={`/images/${imageName}`} />
        <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
      </div>
      <div className="w-3 h-3 border border-blue-800 rounded-full bg-blue-700 z-10"></div>
      <div className="right-content w-1/2 flex flex-col justify-center items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">{title}</h2>
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
