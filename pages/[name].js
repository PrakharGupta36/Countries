import Router from "next/router";
import { motion } from "framer-motion";

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
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div className='details'>
      <button id='button-details' onClick={() => Router.push("/")}>
        {" "}
        Back{" "}
      </button>
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
        return (
          <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial='hidden' // Set the initial state to variants.hidden
            animate='enter' // Animated state to variants.enter
            exit='exit' // Exit state (used later) to variants.exit
            transition={{ type: "linear" }} // Set the transition to linear
            className=''
            key={index}>
            <div className='card-details'>
              <div className='card-details-1'>
                {" "}
                <img src={flags.png} alt='img' />{" "}
              </div>
              <div className='card-details-2'>
                <h1> {typeof name === undefined ? "Not Available" : name} </h1>
                <div className='card-details-2-info'>
                  <p>
                    {" "}
                    <span> Native Name : </span>{" "}
                    {typeof nativeName === undefined
                      ? "Not Available"
                      : nativeName}{" "}
                  </p>
                  <p>
                    {" "}
                    <span> Population : </span>{" "}
                    {typeof population === undefined
                      ? "Not Available"
                      : population}{" "}
                  </p>
                  <p>
                    {" "}
                    <span> Region : </span>{" "}
                    {typeof region === undefined ? "Not Available" : region}{" "}
                  </p>
                  <p>
                    {" "}
                    <span> Sub Region : </span>{" "}
                    {typeof subregion === undefined
                      ? "Not Available"
                      : subregion}{" "}
                  </p>
                  <p>
                    {" "}
                    <span> Top Level Domain : </span>{" "}
                    {typeof topLevelDomain === undefined
                      ? "Not Available"
                      : topLevelDomain}{" "}
                  </p>
                  <p>
                    {" "}
                    <span> Currencies : </span>{" "}
                    {Array.isArray(currencies)
                      ? currencies.map((i, index) => {
                          return (
                            <span key={index} className='not-span'>
                              {" "}
                              {i.name},{" "}
                            </span>
                          );
                        })
                      : "Not Available"}{" "}
                  </p>
                  <p>
                    {" "}
                    <span> Languages : </span>{" "}
                    {Array.isArray(languages)
                      ? languages.map((i, index) => {
                          return (
                            <span key={index} className='not-span'>
                              {" "}
                              {i.name},{" "}
                            </span>
                          );
                        })
                      : "Not Available"}{" "}
                  </p>
                  <p>
                    {" "}
                    <span> Borders : </span> <br />{" "}
                    {Array.isArray(borders)
                      ? borders.map((i, index) => {
                          return (
                            <button key={index} className='not-span-button'>
                              {" "}
                              {i},{" "}
                            </button>
                          );
                        })
                      : "Not Available"}{" "}
                  </p>
                </div>
              </div>
            </div>
          </motion.main>
        );
      })}
    </div>
  );
}
