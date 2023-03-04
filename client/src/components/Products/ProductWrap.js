import React from 'react'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import blogService from '../../services/blogService'
import SideBar from '../SideNav/body/SideBar'
import SideBody from '../SideNav/body/SideBody'
import SideNav from '../SideNav/SideNav'
import Product from './Product'
const ProductWrap = () => {
  const [state2, setState2] = useState(true)
  const { id } = useParams();


  function Click() {
    if (state2) {
      setState2(false)
    }
    else {
      setState2(true)
    }

  }

  const initialProducts = {
    id: null,
    title: "",
    description: "",
    features: "",
    gridfilename: [],
    author: "",
    role: "",
    createdAt: ""
  };
  const [products, setProducts] = useState(initialProducts);
  const [state, setState] = useState(false)

  const response = (id) => {
    blogService.get(id)
      .then(response => {
        setProducts(response.data);
        setState(true)
      })
      .catch(e => {
        console.log(e);
      });
  }
  const pics = products.gridfilename
  useEffect(() => {
    response(id)
  }, [id]);
  return (

    <div className='layout-wrapper d-lg-flex'>

      <SideBar />
      <SideBody />
      {(function () {
        if (state === true) {
          return <Product id={products._id} title={products.title}
            state2={state2} setState2={Click}
            description={products.description} features={products.features}
            author={products.author} date={products.createdAt} image={pics} />
        }
      })(state)}

    </div>

  )
}

export default ProductWrap