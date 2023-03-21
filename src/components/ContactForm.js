import React, { useState } from 'react'

function ContactForm() {
    const [contactData,setContactData]=useState({name:'',mail:'',subject:'',message:''});
    const handleChange=(e)=>{
        if(e.target.placeholder==="Your Name"){
            setContactData((prevState)=>{return {...prevState,name:e.target.value}}
            )
        }
        else if(e.target.placeholder==="Your Email"){
            setContactData((prevState)=>{return {...prevState,mail:e.target.value}}
            )
        }
        else if(e.target.placeholder==="Subject"){
            setContactData((prevState)=>{return {...prevState,subject:e.target.value}}
            )
        }
        else if(e.target.placeholder==="Your Message"){
            setContactData((prevState)=>{return {...prevState,message:e.target.value}}
            )
        }}
    
        const submitHandler=(e)=>{
            console.log('hi')
            e.preventDefault();
            console.log(contactData);
            setContactData({name:'',mail:'',subject:'',message:''});
        }
  return (
    <form className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
              <input onChange={handleChange} value={contactData['name']} className="input" type={"text"} placeholder="Your Name" />
              <input
                className="input"
                type={"email"}
                onChange={handleChange}
                value={contactData['mail']}
                placeholder="Your Email"
              />
            </div>
            <input type={"text"} onChange={handleChange} value={contactData['subject']} className="input" placeholder="Subject" />
            <textarea
              className="textarea"
              onChange={handleChange}
              value={contactData['message']}
              placeholder="Your Message"
            ></textarea>
            <button onClick={submitHandler} className="btn btn-lg bg-accent hover:bg-accent-hover ">
              Send message
            </button>
          </form>
  )
}

export default ContactForm
