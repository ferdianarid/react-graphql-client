import { gql } from "@apollo/client"

export const LOAD_USERS = gql`
       query {
              GetAllUsers {
                     id
                     firstName
                     lastName
                     email
                     password
              }
       }
`