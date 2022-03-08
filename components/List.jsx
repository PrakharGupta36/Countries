export default function List(props) {
  return (
    <div className='card-list center-center'>
      {props.list.map((i, index) => {
        const { flags, name, population, region, capital } = i;
        return (
          <Link key={index} href={{ pathname: `/${name}` }}>
            <div
              className='card'
              onClick={() => {
                console.log(name);
              }}>
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
      })}
    </div>
  );
}
