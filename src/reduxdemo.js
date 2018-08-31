import React,{ Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component{
    render(){
         //step2 Reducer: state and action
         const reducer=function(state,action){
            if(action.type ==="attack"){
                return action.payload
            }
            if(action.type ==="greenattack"){
                return action.payload
            }
            return state;
        }
        //step1 store :reducer and state
        const store=createStore(reducer,"peace")
       
        //step3 subscribe
        store.subscribe(()=>{
            console.log("store is now ",store.getState());
        })
        //step4 :displach
        store.dispatch({type:"attack",payload:"bomb"})
        store.dispatch({type:"greenattack",payload:"hulk"})

        return(
        <div>
            test
        </div>
        )
    }
}
export default ReduxDemo;