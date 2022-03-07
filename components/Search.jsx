export default function Search() {
  return (
    <select name='search' defaultValue={"All"} id='search'>
      <option value='All' disabled>
        {" "}
        Filter By Region{" "}
      </option>
      <option value='Africa'> Africa </option>
      <option value='America'> America </option>
      <option value='Asia'> Asia </option>
      <option value='Europe'> Europe </option>
      <option value='Oceania'> Oceania</option>
    </select>
  );
}
