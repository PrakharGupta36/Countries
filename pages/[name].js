import Router from "next/router";

export async function getStaticPaths() {
  const res = await fetch(`https://restcountries.com/v2/all`);
  const data = await res.json();

  const paths = data.map((i, index) => {
    return {
      params: { name: i.name.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(e) {
  const name = e.params.name;
  const res = await fetch(`https://restcountries.com/v2/name/${name}`);
  const data = await res.json();

  return {
    props: { list: data },
  };
}

export default function Details({ list }) {
  return (
    <div className='details'>
      <button id="button-details" onClick={() => Router.push("/")}> Back </button>
      {list.map((i, index) => {
        const {
          name,
          nativeName,
          flags,
          population,
          region,
          subregion,
          topLevelDomain,
          borders,
          currencies,
          languages,
        } = i;
        console.log(i);
        return (
          <div key={index} className='card-details'>
            <div className='card-details-1'>
              {" "}
              <img src={flags.png} alt='img' />{" "}
            </div>
            <div className='card-details-2'>
              <h1> {name} </h1>
              <div className='card-details-2-info'>
                <p>
                  {" "}
                  <span> Native Name : </span> {nativeName}{" "}
                </p>
                <p>
                  {" "}
                  <span> Population : </span> {population}{" "}
                </p>
                <p>
                  {" "}
                  <span> Region : </span> {region}{" "}
                </p>
                <p>
                  {" "}
                  <span> Sub Region : </span> {subregion}{" "}
                </p>
                <p>
                  {" "}
                  <span> Top Level Domain : </span> {topLevelDomain}{" "}
                </p>
                <p>
                  {" "}
                  <span> Currencies : </span>{" "}
                  {currencies.map((i, index) => {
                    return (
                      <span key={index} className='not-span'>
                        {" "}
                        {i.name},{" "}
                      </span>
                    );
                  })}{" "}
                </p>
                <p>
                  {" "}
                  <span> Languages : </span>{" "}
                  {languages.map((i, index) => {
                    return (
                      <span key={index} className='not-span'>
                        {" "}
                        {i.name},{" "}
                      </span>
                    );
                  })}{" "}
                </p>
                {/* <p>
                  {" "}
                  <span> Borders : </span> <br />{" "}
                  {borders.map((i, index) => {
                    return (
                      <button key={index} className='not-span-button'>
                        {" "}
                        {i},{" "}
                      </button>
                    );
                  })}{" "}
                </p> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
