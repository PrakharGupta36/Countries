import Link from "next/link";
import Input from "../components/Input";
import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

export async function getServerSideProps() {
  const res = await fetch(`https://restcountries.com/v2/all`);
  const data = await res.json();

  return { props: { list: data } };
}

export default function Home({ list }) {
  const [searchField, setSearchField] = useState("");
  const [load, setLoad] = useState(10);

  const filtered = list.filter((i) => {
    return i.name.toLowerCase().includes(searchField.toLowerCase());
  });

  console.log(filtered.length);
  return (
    <>
      <head>
        <title> Countries </title>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='' />
      </head>
      <div className='nav-2 center-center'>
        <Input
          searchChange={(e) => {
            setSearchField(e.target.value);
          }}
        />
      </div>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            scale: 0.1,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.75 },
          },
        }}>
        <div className='card-list center-center'>
          {filtered.length === 0 ? (
            <h1> Not here... </h1>
          ) : (
            filtered.slice(0, load).map((i, index) => {
              const { flags, name, population, region, capital } = i;
              return (
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.25 },
                  }}
                  key={index}
                  whileTap={{ scale: 1 }}>
                  <Link href={{ pathname: `/${name}` }}>
                    <div
                      className='card'
                      onClick={() => {
                        console.log(name);
                      }}
                      id={`link${index}`}>
                      {" "}
                      <img loading='lazy' src={flags.png} alt='img' />
                      <div className='card-heading'>
                        <h4>
                          {" "}
                          {typeof name === undefined
                            ? "Not available"
                            : name}{" "}
                        </h4>
                      </div>
                      <div className='card-info'>
                        <p>
                          {" "}
                          <span> Population </span> :{" "}
                          {typeof population === undefined
                            ? "Not available"
                            : population}{" "}
                        </p>
                        <p>
                          {" "}
                          <span> Region </span> :{" "}
                          {typeof region === undefined
                            ? "Not available"
                            : region}{" "}
                        </p>
                        <p>
                          {" "}
                          <span> Capital </span>:{" "}
                          {typeof capital === undefined
                            ? "Not available"
                            : capital}{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          )}
        </div>
      </motion.div>
      <div className='buttons'>
        <button
          id='load'
          onClick={() => {
            setLoad((load += 10));
            document.documentElement.scrollTop =
              document.documentElement.scrollHeight;
          }}>
          {" "}
          Load More{" "}
        </button>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
          {" "}
          Back to the Top{" "}
        </button>
      </div>
    </>
  );
}
