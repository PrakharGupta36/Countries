import Router from "next/router";

export async function getStaticPaths() {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();

  const paths = data.map((i, index) => {
    return {
      params: { name: i.name.common.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(e) {
  const name = e.params.name;
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await res.json();

  return {
    props: { list: data },
  };
}

export default function Details({ list }) {
  return (
    <div className='details'>
      <button onClick={() => Router.push("/")}> Back </button>
      {list.map((i, index) => {
        const {
          name,
          flags,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages,
        } = i;
        return (
          <div key={index} className='card-details center-center'>
            <div className='card-details-1'>
              {" "}
              <img src={flags.png} alt='img' />{" "}
            </div>
            <div className='card-details-2'>
              <h1> {name.common} </h1>
              <div className='card-details-2-info'></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
