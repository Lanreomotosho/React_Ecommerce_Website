import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({filteredItems}) => {
  return (
    <div>
     {
       filteredItems.map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img src={item.image} alt="" />
            </Link>
            <div>
              
            </div>
        </div>
       ))
     }

    </div>
  )
}

export default Cards;