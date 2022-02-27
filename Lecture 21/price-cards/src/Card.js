function Card(props) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{props.type}</h5>
                <h6 className="card-price text-center">{props.price}<span className="period">/month</span></h6>
                <hr/>
                <ul className="fa-ul">
                {
                props.features.map((value) => {
                  return <li><span className="fa-li"><i className="fas fa-check"></i></span>{value}</li>
                })
                }
                {
                props.features_not.map((value) => {
                  return <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{value}</li>
                })
                }
                </ul>
                <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
            </div>
            </div>
      </div>
    );
  }

export default Card;