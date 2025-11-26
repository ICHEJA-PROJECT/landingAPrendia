export const TableHeader = ({headers = []}) => {
  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        {headers.map((header, idx) => (
          <th
            key={idx}
            className="px-6 py-4 text-left text-sm font-semibold text-gray-700 whitespace-nowrap"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};
