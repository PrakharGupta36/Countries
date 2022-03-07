import Link from "next/link";
import Input from "../components/Input";
import Search from "../components/Search";

export async function getServerSideProps() {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();

  return { props: { list: data } };
}

export default function Home({ list }) {
  return (
    <>
      <div className='nav-2 center-center'>
        <Input />
        <Search />
      </div>
      <div className='card-list center-center'>
        {list.map((i, index) => {
          // console.log(i);
          const { flags, name, population, region, capital } = i;
          return (
            <Link key={index} href={{ pathname: `/${name.common}` }}>
              <div
                className='card'
                onClick={() => {
                  console.log(name);
                }}>
                {" "}
                <img loading='lazy' src={flags.png} alt='img' />
                <div className='card-heading'>
                  <h4> {name.common} </h4>
                </div>
                <div className='card-info'>
                  <p>
                    {" "}
                    <span> Population </span> : {population}{" "}
                  </p>
                  <p>
                    {" "}
                    <span> Region </span> : {region}{" "}
                  </p>
                  <p>
                    {" "}
                    <span> Population </span>: {capital}{" "}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
