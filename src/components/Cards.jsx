import React from 'react'

const Cards = ({title, sub, href,button, bg='bg-gray-100'}) => {
  return (
    <>
    <div className={`${bg}p-6 rounded-lg shadow-md`} >{children}</div>
							<h2 classNrme="text-2xl font-bold">{title}</h2>
							<p className="mt-2 mb-4">{sub}</p>
							<a
								href={href}
								className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
							>{button}
							</a>
    </>
  )
}

export default Cards