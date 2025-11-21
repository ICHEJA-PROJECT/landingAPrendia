const Select = ({ label, options = [], required = false, name, placeholder = "Seleccionar" }) => {
  return (
    <div className="w-full">
      <label className="block text-lg font-semibold text-gray-800 mb-1.5">
        {label} {required && <span className="text-pink-ia">*</span>}
      </label>
      <select
        name={name}
        required={required}
        className="w-full px-3 py-2 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-ia transition-colors"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
