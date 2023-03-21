import React from 'react'

function ContactDetails(props) {
  return (
    <div className="flex mx-auto flex-1 flex-col items-start space-y-8 mb-12 lg:mb:0 lg:pt-2">
            {props.contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-row lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
  )
}

export default ContactDetails
