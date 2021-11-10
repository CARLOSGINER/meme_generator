import './App.css';
import Form from './components/form.js';
import Display from './components/display';
import { useState } from 'react';
import Header from './components/header';

function App() {

  const [imgName,setImgName] = useState('');

  const [textInput,setTextInput] = useState({
    upperTextInput:'',
    lowerTextInput:''
  })

  const onTextChange = ({target}) =>{
    setTextInput({...textInput,[target.name]:target.value})
  }

  const onSelectedImg = ({target}) => {
    const imgName = target.value;
    setImgName(imgName)
  }  

  let imgOptions = [
    {
      value:'disaster_girl',
      optionName: 'Disaster Girl',
      url:'/img/disaster_girl.jpg'
    },
    {
      value:'brian_nerd',
      optionName: 'Brian Nerd',
      url:'/img/brian_nerd.jpg'
    }
  ]

  return (
    <div className="App">

      <img className='logo' src={"/assets/memeit_logo.png"} alt="logo" />

      <div className='content_wrapper'>

        <div className="header_wrapper">
           <Header className='header'/>
        </div>
    
        <div className='controls_wrapper'>
          <Form 
            imgOptions={imgOptions}
            onSelectedImg={onSelectedImg} 
            onTextChange={onTextChange}/>

          <Display className='display'
            imgName={imgName} 
            upperLine={textInput.upperTextInput} 
            lowerLine={textInput.lowerTextInput} />
        </div>
      </div>

    </div>
  );
}

export default App;
