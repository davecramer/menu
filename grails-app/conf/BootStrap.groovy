import com.postgresintl.Customer
import com.postgresintl.Menu
import com.postgresintl.Meal

class BootStrap {

    def init = { servletContext ->
      Customer customer = new Customer(firstName: 'Dave', lastName: 'Cramer', login: 'davec', password: 'foo').save()
      Menu menu = new Menu(customer: customer).save()
      Meal meal = new Meal(day:  Meal.DAYS.MON, time:  Meal.TIMES.MORNING, items: 'Buckwheat Cereal').save()

      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.MON, time:  Meal.TIMES.MID_MORNING, items: 'Pineapple, pumpkin seeds').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.MON, time:  Meal.TIMES.LUNCH, items: 'Monday Lunch').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.MON, time:  Meal.TIMES.AFTERNOON, items: 'Monday aft ').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.MON, time:  Meal.TIMES.DINNER, items: 'Monday dinner').save()
      menu.addToMeals(meal)

      meal = new Meal(day:  Meal.DAYS.TUE, time:  Meal.TIMES.MORNING, items: 'Buckwheat Cereal').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.TUE, time:  Meal.TIMES.MID_MORNING, items: 'Pineapple, pumpkin seeds').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.TUE, time:  Meal.TIMES.LUNCH, items: 'Tues Lunch').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.TUE, time:  Meal.TIMES.AFTERNOON, items: 'Tues aft ').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.TUE, time:  Meal.TIMES.DINNER, items: 'Tues dinner').save()
      menu.addToMeals(meal)

      meal = new Meal(day:  Meal.DAYS.WED, time:  Meal.TIMES.MORNING, items: 'Buckwheat Cereal').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.WED, time:  Meal.TIMES.MID_MORNING, items: 'Pineapple, pumpkin seeds').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.WED, time:  Meal.TIMES.LUNCH, items: 'Wednsday Lunch').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.WED, time:  Meal.TIMES.AFTERNOON, items: 'Wednsday aft ').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.WED, time:  Meal.TIMES.DINNER, items: 'Wednsday dinner').save()
      menu.addToMeals(meal)


      meal = new Meal(day:  Meal.DAYS.THU, time:  Meal.TIMES.MORNING, items: 'Buckwheat Cereal').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.THU, time:  Meal.TIMES.MID_MORNING, items: 'Pineapple, pumpkin seeds').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.THU, time:  Meal.TIMES.LUNCH, items: 'Thursday Lunch').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.THU, time:  Meal.TIMES.AFTERNOON, items: 'Thursday aft ').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.THU, time:  Meal.TIMES.DINNER, items: 'Thursday dinner').save()
      menu.addToMeals(meal)


      meal = new Meal(day:  Meal.DAYS.FRI, time:  Meal.TIMES.MORNING, items: 'Buckwheat Cereal').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.FRI, time:  Meal.TIMES.MID_MORNING, items: 'Pineapple, pumpkin seeds').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.FRI, time:  Meal.TIMES.LUNCH, items: 'Friday Lunch').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.FRI, time:  Meal.TIMES.AFTERNOON, items: 'Friday aft ').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.FRI, time:  Meal.TIMES.DINNER, items: 'Friday dinner').save()
      menu.addToMeals(meal)

      meal = new Meal(day:  Meal.DAYS.SAT, time:  Meal.TIMES.MORNING, items: 'Buckwheat Cereal').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.SAT, time:  Meal.TIMES.MID_MORNING, items: 'Pineapple, pumpkin seeds').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.SAT, time:  Meal.TIMES.LUNCH, items: 'Saturday Lunch').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.SAT, time:  Meal.TIMES.AFTERNOON, items: 'Saturday aft ').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.SAT, time:  Meal.TIMES.DINNER, items: 'Saturday dinner').save()
      menu.addToMeals(meal)

      meal = new Meal(day:  Meal.DAYS.SUN, time:  Meal.TIMES.MORNING, items: 'Buckwheat Cereal').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.SUN, time:  Meal.TIMES.MID_MORNING, items: 'Pineapple, pumpkin seeds').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.SUN, time:  Meal.TIMES.LUNCH, items: 'Sunday Lunch').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.SUN, time:  Meal.TIMES.AFTERNOON, items: 'Sunday aft ').save()
      menu.addToMeals(meal)
      meal = new Meal(day:  Meal.DAYS.SUN, time:  Meal.TIMES.DINNER, items: 'Sunday dinner').save()
      menu.addToMeals(meal)
      menu.save()
      customer.addToMenus(menu).save()



    }
    def destroy = {
    }
}
