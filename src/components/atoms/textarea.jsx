const TextArea = ({ 
  label, 
  placeholder, 
  required = false, 
  name, 
  rows = 4, 
  maxLength 
}) => {
  return (
    <div className="w-full">
      <label className="block text-lg font-semibold text-gray-800 mb-1.5">
        {label} {required && <span className="text-pink-ia">*</span>}
      </label>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className="w-full px-3 py-2 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-ia transition-colors resize-none"
      />
      {maxLength && (
        <p className="text-sm text-gray-500 mt-1">
          Máximo {maxLength} caracteres
        </p>
      )}
    </div>
  )
}

export default TextArea
