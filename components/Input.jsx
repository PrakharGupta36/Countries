export default function Input() {
  return (
    <input
      aria-label='input'
      onChange={(e) => {
        console.log(e.target.value);
      }}
      placeholder='Search for a country'
      type='text'
    />
  );
}
