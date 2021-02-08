import React from 'react';
import {BOOK} from '../../store';
import './styles.css'
import {AiOutlineDelete} from 'react-icons/ai';


interface PROPS extends BOOK{
  index:number;
  clickEdit(param:number):any;
  clickDelete(param:number):any;
  
}

function Card(props:PROPS) {
    
  return <div className="Card" key={props.title}>
     <div className="info" style={{textDecoration:props.read?"line-through":""}}>
     <h3> <u> {props.title} </u></h3> 
     <br/>
     <h4>{props.description}</h4>
     </div>
     <div className="actions">
     {//checkbox update fix bug
       props.read?(
       <input type='checkbox' checked className="checkbox" onClick={()=>{
        props.clickEdit(props.index)
    }}/>)
    :(
      <input type='checkbox' className="checkbox" onClick={()=>{
        props.clickEdit(props.index)
    }}/>
    )
     }
      <button className="btn btn-secondary btn-lg" onClick={()=>{
                props.clickDelete(props.index)
            }}><AiOutlineDelete size='1.4rem'/></button>
     </div>
      
  </div>;

}

export default Card;