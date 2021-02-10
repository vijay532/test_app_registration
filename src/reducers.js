import { createStore } from 'redux'

const initialState={
  users:''
}


const reducer=(state=intialState,action)=>{
  switch(action.type){

    case 'LOGIN':
      return{
        ...state   //maintain present state
      }

			case 'fail':

			return{
				
			}

  }

  
}

const { createStore } = Redux; 
const store = createStore(reducer);

//To change something in the state, you need to dispatch an action. 
