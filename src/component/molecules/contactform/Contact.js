import React from 'react'
import Submitbtn from '../../atoms/buttons/Submitbtn'
import Worldmap from '../../atoms/worldmap/Worldmap'
import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaBeer } from 'react-icons/fa';




// reacthookform
const schema = yup.object().shape({
  fname: yup.string().required("Please provide a First Name"),
  lname: yup.string().required("Please provide a Last Name"),
  email: yup.string().email().required("Please provide a properly formatted email address"),
  message: yup.string().required("Please add a message")
})

function Contact() {

  const {register, handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(schema),
  });

  const submitForm = (data) => {
   console.log(data)
  }
  
  return (
    <><h2 className='font-Redhat text-[2.2rem] text-center leading-[40px] font-black
    text-dark-custom'>Have some Questions?</h2>
    <div className='w-full flex mt-8'>
          <div className=' hidden p-4 lg:!block '>
            <Worldmap/>
          </div>
       
        <form onSubmit={handleSubmit(submitForm)}className='w-full'>
            <div className='mb-2'>
                <label htmlFor="fname" name="fname" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>First Name</label>
                <input id="fname" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-violet-custom block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500' type="text" placeholder='First Name' aria-errormessage='errorMsg' aria-invalid="true" {...register('fname')}/>
            </div>
          
             
            <p id="errorMsg" className='bg-[#f50f50] text-white pl-2 mb-1'> {
              errors.fname?.message
            } </p>
        
            <div className='mb-2'>
                <label htmlFor="lname" name="lname"  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Last Name</label>
                <input id="lname" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500' type="text" placeholder='Last Name'  aria-describedby='errorMsg' aria-invalid="true"  {...register('lname')} />
            </div>
            <p id="errorMsg" className='bg-[#f50f50] text-white pl-2 mb-1'> {
              errors.lname?.message
            }</p>
           
            <div className='mb-2'>
                <label htmlFor="email" name="email"  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>What's your Email</label>
                <input id="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500' type="email" placeholder="What's your Email"  aria-describedby='errorMsg' aria-invalid="true" {...register('email')}  />
            </div>
            <p id="errorMsg" className='bg-[#f50f50] text-white pl-2 mb-1'> {
              errors.email?.message
            }</p>
            
            <div className='mb-2'>
                <label htmlFor="message" name="message"  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your Message</label>
                <textarea id="message" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500' type="text" placeholder="Your Message"  aria-describedby='errorMsg' aria-invalid="true"  {...register('message')} />
            </div>
            <p id="errorMsg" className='bg-[#f50f50] text-white pl-2 mb-1'> {
              errors.message?.message
            }</p>
            
            <div className='mt-4 text-center'>
            <Submitbtn></Submitbtn>
            </div>
           
        </form>
       
    </div>
    
    </>
  )
}

export default Contact


// yarn add react-hook-form yup @hookform/resolvers