import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER_MUTATION } from "../graphql/Mutations"

const Form = () => {
       const [firstName, setFirstname] = useState("")
       const [lastName, setLastname] = useState("")
       const [email, setEmail] = useState("")
       const [password, setPassword] = useState("")

       const [createUsers, { error }] = useMutation(CREATE_USER_MUTATION)

       const CreateUser = () => {
              createUsers({
                     variables: {
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            password: password
                     }
              })
              if (error) {
                     console.log(error)
              }
       }

       return (
              <React.Fragment>
                     <div className="max-w-2xl m-auto mt-8 text-center">
                            <h1 className="text-[2rem] font-bold md:text-heading-lg">Lets Create Your Account</h1>
                            <p className="text-small text-gray-500 font-normal pt-2">Create new account and access all features</p>
                     </div>
                     {/* <!-- Create Product Form --> */}
                     <form className="max-w-sm m-auto mt-8 mb-8 rounded-lg border border-gray-300 py-8 px-10">
                            {/* <!-- Firstname --> */}
                            <div className="mb-4">
                                   <label htmlFor="firstname" className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                                   <input type="text" required id="firstName" value={firstName} name="firstName" onChange={event => setFirstname(event.target.value)} placeholder="Enter Firstname" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                            </div>

                            {/* <!-- Lastname --> */}
                            <div className="mb-4">
                                   <label htmlFor="lastname" className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                                   <input type="text" required id="lastName" value={lastName} name="lastName" onChange={event => setLastname(event.target.value)} placeholder="Enter Lastname" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                            </div>

                            {/* <!-- Email Address --> */}
                            <div className="mb-4">
                                   <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                                   <input type="email" required id="email" value={email} name="email" onChange={event => setEmail(event.target.value)} placeholder="Enter Email Address" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                            </div>

                            {/* <!-- Password --> */}
                            <div className="mb-4">
                                   <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                                   <input type="text" required id="password" value={password} name="password" onChange={event => setPassword(event.target.value)} placeholder="Enter Password" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                            </div>

                            {/* <!-- Create User Button --> */}
                            <button onClick={CreateUser} type="submit" className="mb-4 w-full text-center font-bold ml-0 no-underline inline-block px-4 py-3 leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0">
                                   <p className="text-lg font-bold">Create Account</p>
                            </button>
                     </form>
              </React.Fragment >
       )
}

export default Form