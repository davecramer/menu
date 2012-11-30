package com.postgresintl

class Customer {
    String firstName
    String lastName
    String login
    String password

    static hasMany=[menus:Menu]

    static constraints = {
    }
}
