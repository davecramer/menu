enyo.kind({
	name: 'Meal',
	kind: enyo.Control,
	tag: 'td',
	style: 'border-style: solid; border-width: 2px' +
					'min-height: 50px min-width:100px',

    components: [

        {tag:'blockquote', name: 'items'},
        {kind: 'enyo.TextArea', name: 'editItems',  placeholder: 'Enter some text...', showBorder: true, onblur: 'textAreaBlur',onchange: 'inputChanged'}
    ],
	published: {
		text: '',
        id:''
	},
	ontap: 'tap',
	
	tap: function(inSender, inEvent){
		var meal = inSender.parent;
        var content = meal.$.items.content

        meal.$.editItems.setValue(meal.$.items.content)

        var editItems = meal.$.editItems.getValue()
        meal.$.items.hide()
        meal.$.editItems.show()
        meal.$.editItems.focus()
	},
    inputChanged: function(inSender, inEvent)
    {
        var meal = inSender.parent

        var request = new enyo.Ajax({url: 'http://localhost:8080/menu/menu/updateJSON'});

        //request.response(enyo.bind(this, "processMenuResults"));

        request.go({ id: meal.id, items: meal.$.editItems.getValue() });
    },
    textAreaBlur: function (inSender, inEvent) {
        var meal = inSender.parent;
        var content =  meal.$.editItems.getValue()
        meal.$.items.setContent( meal.$.editItems.getValue())
        var itemContent = meal.$.items.content
        meal.$.editItems.hide()
        meal.$.items.show()
        //meal.$.items.render()

    },
	create: function() {
		this.inherited(arguments);
        this.$.items.content = this.text;
        this.$.editItems.hide();
		//this.createComponent({tag: 'blockquote', content: this.text});
		
	}
});

enyo.kind({
	name: "Menu",
	  kind: enyo.Control,
	  tag: "div",
	  style: "border-style: solid; border-width: 2px; " +
	         "padding: 10px; margin: 10px; min-height: 50px",

	  published: {
	    menu: "",
		userName:''
	  },

	  components: [
                {tag: 'table', name: 'customer', components:[{tag: 'tr', name: 'menu_header', components: [
                    {tag: 'th', name: 'customer_name',content: 'Dave Cramer'}
                ]}] },

		        { tag: "table", name: "menu" , 
		                components: [

		                    {tag: 'tr', name: 'breakfast', components: [
		                        {tag: 'td', name: 'b_mon',content: 'Mon'},
		                        {tag: 'td', name: 'b_tue',content: 'Tues'},
		                        {tag: 'td', name: 'b_wed',content: 'Wed'},
		                        {tag: 'td', name: 'b_thu',content: 'Thurs'},
		                        {tag: 'td', name: 'b_fri',content: 'Fri'},
		                        {tag: 'td', name: 'b_sat',content: 'Sat'},
		                        {tag: 'td', name: 'b_sun',content: 'Sun'},
		                    ]},
		                    {tag: 'tr', name: 'morn_snack', components: [
		                        {tag: 'td', name: 'm_mon',content: 'Mon'},
		                        {tag: 'td', name: 'm_tue',content: 'Tues'},
		                        {tag: 'td', name: 'm_wed',content: 'Wed'},
		                        {tag: 'td', name: 'm_thu',content: 'Thurs'},
		                        {tag: 'td', name: 'm_fri',content: 'Fri'},
		                        {tag: 'td', name: 'm_sat',content: 'Sat'},
		                        {tag: 'td', name: 'm_sun',content: 'Sun'},
		                    ]},
		                    {tag: 'tr', name: 'lunch', components: [
		                        {tag: 'td', name: 'l_mon',content: 'Mon'},
		                        {tag: 'td', name: 'l_tue',content: 'Tues'},
		                        {tag: 'td', name: 'l_wed',content: 'Wed'},
		                        {tag: 'td', name: 'l_thu',content: 'Thurs'},
		                        {tag: 'td', name: 'l_fri',content: 'Fri'},
		                        {tag: 'td', name: 'l_sat',content: 'Sat'},
		                        {tag: 'td', name: 'l_sun',content: 'Sun'},
		                    ]},
		                    {tag: 'tr', name: 'aft_snack', components: [
		                        {tag: 'td', name: 'a_mon',content: 'Mon'},
		                        {tag: 'td', name: 'a_tue',content: 'Tues'},
		                        {tag: 'td', name: 'a_wed',content: 'Wed'},
		                        {tag: 'td', name: 'a_thu',content: 'Thurs'},
		                        {tag: 'td', name: 'a_fri',content: 'Fri'},
		                        {tag: 'td', name: 'a_sat',content: 'Sat'},
		                        {tag: 'td', name: 'a_sun',content: 'Sun'},
		                    ]},
		                    {tag: 'tr', name: 'dinner', components: [
		                        {tag: 'td', name: 'd_mon',content: 'Mon'},
		                        {tag: 'td', name: 'd_tue',content: 'Tues'},
		                        {tag: 'td', name: 'd_wed',content: 'Wed'},
		                        {tag: 'td', name: 'd_thu',content: 'Thurs'},
		                        {tag: 'td', name: 'd_fri',content: 'Fri'},
		                        {tag: 'td', name: 'd_sat',content: 'Sat'},
		                        {tag: 'td', name: 'd_sun',content: 'Sun'},
		                    ]}
		                ]},
		          ],

	  create: function() {
	    this.inherited(arguments);
			//this.menuChanged();
			this.search();
	    
	  },
		search: function() {
	    var searchTerm = 'davec';
	    var request = new enyo.Ajax({url: "http://localhost:8080/menu/menu/showAsJSON"});

	    request.response(enyo.bind(this, "processMenuResults"));
	    request.go({ customerLogin: searchTerm });
	  },

      addMeal:function(inResult)
      {

        var comp = inResult.time[0] + '_'+ inResult.day.toLowerCase()  ;

        this.createComponent({
            kind: Meal,
            name: 'meal_' + comp,
            text: inResult.items,
            component: this.$[comp]
        })


      },

    // this comes in orderd by time of day then days
	  processMenuResults: function(inRequest, inResponse) {
	    if (!inResponse) return;

        var time=''
        this.$.menu.destroyClientControls();

        for (var i = 0; i < inResponse.length;i++ )
          {
            var row;
            if ( inResponse[i].time.name != time)
            {
                // create a row
                time = inResponse[i].time.name
                var row = this.$.menu.createComponent({tag: 'tr', name: time.name, components:[{tag: 'th', content: time}]})

            }

            row.createComponent({kind: Meal, id: inResponse[i].id, name: 'meal'+time +inResponse[i].day.name, text:inResponse[i].items})
          }
          this.$.menu.render()




	    //this.$.tweetList.render();
	  },

	  menuChanged: function() {
				var meals = ['breakfast','morn_snack','lunch','aft_snack','dinner']
				var days =  ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
				
			for(var meal in meals )
			{
				var daymeal = meals[meal][0]+'_';
				for ( var day in days)
				{
					
					var foo=daymeal+days[day]
					var mealName = foo+'_meal'
		    	this.$[foo].createComponent({kind:'Meal', name:mealName,text:foo})
				}
			}
	  }
});
