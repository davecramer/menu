package com.postgresintl

class Menu
{
  SortedSet <Meal> meals
  static hasMany = [meals:Meal]
  static mapping = {
    meals lazy: false
  }

  static belongsTo = [customer:Customer]
  static constraints = {
  }
}
