export default function Card({ performers }) {
  return (
    <div className="row g-4">
      {performers.map((curPerformer, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100">
            <img
              src={curPerformer.image}
              className="img-fluid rounded-top h-100"
              alt={curPerformer.name}
              style={{
                maxHeight: "360px",
                objectFit: "cover",
                width: "100%",
                objectPosition: "top",
              }}
            />
            <div className="card-body bg-dark text-light">
              <h5 className="card-title">{curPerformer.name}</h5>
              <p className="card-text ">{curPerformer.biography}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{`Birthday: ${curPerformer.birth_year}`}</li>
              <li className="list-group-item">{`Nationality: ${curPerformer.nationality}`}</li>
              <li className="list-group-item">{`Awards: ${curPerformer.awards}`}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
