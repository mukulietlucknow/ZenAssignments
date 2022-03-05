import React, {useState} from 'react'
import Card from './Card'

function Section(props) {
    
  return (
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    props.products.map( info => {
                        return <Card name={info.name} price={info.price} onAdd={props.onAdd} onRemove={props.onRemove}/>
                    })
                }                    
            </div>
        </div>
    </section>
  )
}

export default Section