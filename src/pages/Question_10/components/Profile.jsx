/* eslint-disable react/prop-types */
const Profile = ({ data, setData, error }) => {
  const { name, email, age } = data;

  const handleDataChange = (e, item) => {
    setData((prevState) => ({ ...prevState, [item]: e.target.value }));
  };

  return (
    <div className="space-y-4">
      {[
        { label: "Name", type: "text", value: name, key: "name" },
        { label: "Age", type: "number", value: age, key: "age" },
        { label: "Email", type: "text", value: email, key: "email" },
      ].map(({ label, type, value, key }) => (
        <div key={key} className="flex flex-col">
          <label className="font-medium">{label}:</label>
          <input
            type={type}
            value={value}
            onChange={(e) => handleDataChange(e, key)}
            className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error[key] && (
            <span className="text-red-500 text-sm">{error[key]}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Profile;
