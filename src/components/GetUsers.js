import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_USERS } from '../graphql/Queries'

const GetUsers = () => {
       const { error, loading, data } = useQuery(LOAD_USERS)

       const [users, setUsers] = useState([])

       useEffect(() => {
              if (data) {
                     console.log(data);
                     setUsers(data.GetAllUsers)
              }
       }, [data])

       return (
              <React.Fragment>
                     {
                            users.map((user) => (
                                   <div key={user.id} className="w-full flex flex-col md:flex-row justify-between bg-[#171629] p-3 rounded-md text-white">
                                          <div className="">
                                                 <div className="flex items-center justify-between">
                                                        <h3 className="font-bold text-sm">{user.firstName}</h3>
                                                 </div>
                                                 <p className="text-xs text-yellow-300 font-normal mt-1">{user.lastName}</p>
                                                 <small>{user.email}</small>
                                          </div>
                                          <div className="flex flex-col gap-y-2 md:mt-0 mt-4">
                                                 <button className="py-1 px-3 font-medium text-sm text-white bg-green-600 hover:bg-green-700 rounded-md">Edit</button>
                                                 <button className="py-1 px-3 font-medium text-sm text-white bg-red-600 hover:bg-red-700 rounded-md">Delete</button>
                                          </div>
                                   </div>
                            ))
                     }
              </React.Fragment>
       )
}

export default GetUsers