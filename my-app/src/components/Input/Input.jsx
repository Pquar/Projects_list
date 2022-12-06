export function Input({ type, placeholder, value, onChange, id }) {
  return (
    <input
      type={type}
      id={id}
      className="flex items-center space-x-6 border-cyan-500 border-2 rounded-md p-2"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
