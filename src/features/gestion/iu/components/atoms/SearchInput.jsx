import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const SearchInput = ({ placeholder = 'Buscar...', value, onChange, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-1/2 text-gray-400 w" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-ia focus:border-transparent"
      />
    </div>
  );
};
