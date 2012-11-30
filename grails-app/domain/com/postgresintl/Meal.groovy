package com.postgresintl

class Meal implements Comparable
{
  enum  DAYS  {MON,TUE,WED,THU,FRI,SAT,SUN};
  enum  TIMES {MORNING, MID_MORNING, LUNCH, AFTERNOON, DINNER}

  String items
  DAYS day
  TIMES time
  static belongsTo = [meal:Meal]
  static constraints = {
  }
  int compareTo(obj)
  {
    if (obj instanceof Meal)
    {
      if (obj.time == time )
        return day.compareTo(obj.day)
      else
        return time.compareTo(obj.time)
    }

  }
}
