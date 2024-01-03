import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Rating, RatingValueType } from './components/rating/Rating';
import { Accordion } from './components/accordion/Accordion';
import { Input } from './components/input/Input';
import Button from './components/button/Button';
import {Switch} from "./components/selfWork/Switch";
import { UncontrolledAccordion } from './components/accordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/rating/UncontrolledRating';
import { UncotrolledSwitch } from './components/selfWork/UncontrolledSwitch';


function App() {  

  const [ratingValue, setRatigValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState(true)
  const [onOff, setOnOff] = useState(Boolean)

  return (
    <div className='App'>
      {/* <PageTitle title="This is APP component"/>
      <PageTitle title="My friends"/>
      <div>Article 1</div>
      <Rating value={2}/> */}
      <Accordion title="Friends number" 
        collapsed={accordionCollapsed} 
        onClick={() => setAccordionCollapsed(!accordionCollapsed)}/>
      <Accordion title="Works" 
        collapsed={accordionCollapsed} 
        onClick={() => setAccordionCollapsed(!accordionCollapsed)}/>
      {/* <UncontrolledAccordion titleValue="Friends number"/>
      <UncontrolledAccordion titleValue="Works"/> */}
      {/* <div>Article 2</div> */}
      {/* <UncontrolledRating />
      <UncontrolledRating /> */}
      <Rating value={ratingValue} onClick={setRatigValue}/>
      <Rating value={ratingValue} onClick={setRatigValue}/>
      <Rating value={ratingValue} onClick={setRatigValue}/>
      <Switch onOff={onOff} setOnOff={setOnOff}/>
      <Switch onOff={onOff} setOnOff={setOnOff}/>
      <UncotrolledSwitch />      
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}
function PageTitle(props: PageTitlePropsType) {
  return <h2>{props.title}</h2>
}

export default App;


