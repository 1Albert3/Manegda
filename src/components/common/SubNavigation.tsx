interface SubNavigationProps {
  items: { title: string; href: string }[];
  activeItem: string;
  onNavigate: (href: string) => void;
}

export default function SubNavigation({ items, activeItem, onNavigate }: SubNavigationProps) {
  return (
    <div className="sticky top-20 z-40 py-4">
      <div className="w-full flex justify-center px-4">
        <div className="flex items-center bg-white rounded-full p-1 border border-gray-200 shadow-lg mx-auto">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigate(item.href)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                activeItem === item.href
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:shadow-sm'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}