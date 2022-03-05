import React, {useState} from 'react'

function Card(props) {
    const [disabled, setDisabled] = useState(false)
    const [disabledRemove, setDisabledRemove] = useState(true)

    const removeDisabled = () => {
        props.onRemove({props})
        setDisabled(false)
        setDisabledRemove(true)
    }

    const addDisabled = () => {
        props.onAdd({props})
        setDisabled(true)
        setDisabledRemove(false)
    }
  return (
    <div class="col mb-5">
        <div class="card h-100">
            <div class="badge bg-dark text-white position-absolute">Sale</div>
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">{props.name}</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                    </div>
                    <span class="text-muted text-decoration-line-through">$20.00</span>
                    {props.price}
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <button type="button" class="btn btn-outline-primary" onClick={(event) => {addDisabled()}} disabled={disabled} >Add to cart</button>
                <button type="button" class="btn btn-outline-danger" onClick={removeDisabled} disabled={disabledRemove} >Remove</button>
            </div>
        </div>
    </div>
  )
}

export default Card