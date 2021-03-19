// lets say we are trying to update 
// addressInfo

{
    theme: 'blue',
    addressInfo: {
      street: null,
      number: null,
      city: null,
      country: null
    },
  } 

  //if we do this in a function

  this.setState({
    addressInfo: {
      city: 'New York City'
    }
  });

  //this will overwrite ALL the keys and will result in this

  {
    theme: 'blue',
    addressInfo: {
      city: 'New York City',
    },
  } 

  //but if we use the spread operatpor..

  this.setState({
    addressInfo: {
      ...this.state.addressInfo,
      city: 'New York City'
    }
  }); 

  //here we are setting the state for the addressInfo still 
  //BUT we are using the spread operator to make de-compose it
  //then after we decompose it, we set the state that 
  //we want to change, which is city: to 'New York City'

  //NOW we will get this, instead of overwriting everything
  {
    theme: 'blue',
    addressInfo: {
      street: null,
      number: null,
      city: 'New York City',
      country: null
    },
  } 

  //BOTH state and prop CHANGES will trigger a re render for our Component
  
//State  can only change INTERNALLY, 
//Component can only change its OWN state.

//A component cannot change its props.
//Prop changes can only be done EXTERANLLY 

