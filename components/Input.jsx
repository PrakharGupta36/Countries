export default function Input(props) {
  return (
    <input
      aria-label='input'
      onChange={props.searchChange}
      placeholder='Search for a country'
      type='text'
    />
  );
}
