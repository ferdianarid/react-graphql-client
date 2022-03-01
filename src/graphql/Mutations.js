import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION = gql `
       mutation createUsers(
              $firstName: String!
              $lastName: String!
              $email: String!
              $password: String
              ) {
                     createUsers(
                            firstName: $firstName
                            lastName: $lastName
                            email: $email
                            password: $password
                     ) {
                            id
                     }
              }
`