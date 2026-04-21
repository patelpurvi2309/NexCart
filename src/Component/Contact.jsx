import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTitle } from '../slice/counterSlice'

const Contact = () => {

    const data = useSelector((state) => state.counter)
    const dispatch = useDispatch()

  return (
    <div className='ps-5'>
        <span>{data.value}</span>
        <button onClick={() => dispatch(changeTitle('jay'))} className='btn btn-primary  mx-3'>Title - {data.title}</button>
    </div>
  )
}

export default Contact