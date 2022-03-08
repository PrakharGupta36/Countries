export default function Search(props) {
  return (
    <select
      name='search'
      onChange={props.change}
      defaultValue={""}
      id='search'>
      <option value='' disabled>
        {" "}
        Filter By Continents{" "}
      </option>
      <option value='All'> All Continents </option>
      <option value='Africa'> Africa </option>
      <option value='America'> America </option>
      <option value='Asia'> Asia </option>
      <option value='Europe'> Europe </option>
      <option value='Oceania'> Oceania</option>
    </select>
  );
}
