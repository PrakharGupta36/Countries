import Link from "next/link";
import Input from "../components/Input";
import { useState } from "react";
import Search from "../components/Search";

export async function getServerSideProps() {
  const res = await fetch(`https://restcountries.com/v2/all`);
  const data = await res.json();

  return { props: { list: data } };
}

export default function Home({ list }) {
  const [searchField, setSearchField] = useState("");

  const filtered = list.filter((i) => {
    return i.name.toLowerCase().includes(searchField.toLowerCase());
  });
  console.log(filtered.length);
  return (
    <>
      <div className='nav-2 center-center'>
        <Input
          searchChange={(e) => {
            setSearchField(e.target.value);
          }}
        />
        <Search
          change={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
      <div className='card-list center-center'>
        {filtered.length === 0 ? (
          <h1> Not here... </h1>
        ) : (
          filtered.map((i, index) => {
            const { flags, name, population, region, capital } = i;
            return (
              <Link key={index} href={{ pathname: `/${name}` }}>
                <div
                  className='card'
                  onClick={() => {
                    console.log(name);
                  }}
                  id={`link${index}`}>
                  {" "}
                  <img loading='lazy' src={flags.png} alt='img' />
                  <div className='card-heading'>
                    <h4> {name} </h4>
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
                      <span> Capital </span>: {capital}{" "}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}
