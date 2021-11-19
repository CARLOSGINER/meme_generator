import './App.css';
import Form from './components/form.js';
import Display from './components/display';
import { useState, useEffect } from 'react';
import Header from './components/header';
import html2canvas from 'html2canvas';


function App() {

  const [imgUrl,setImgUrl] = useState('');

  const [textInput,setTextInput] = useState({
    upperTextInput:'',
    lowerTextInput:''
  })

  const onTextChange = ({target}) =>{
    setTextInput({...textInput,[target.name]:target.value}) 
  }

  const [memes, setMemes] = useState([])

  useEffect(() => {
      fetch('https://api.imgflip.com/get_memes').then(x=>x.json()).then(response=>{
        const filteredMemes = response.data.memes.filter(meme=>meme.box_count === 2);
        setMemes(filteredMemes)
      } 
    )
  }, [])

  console.log(memes)
  const onSelectedImg = ({target}) => {
     let selectedUrl = '';
     const imgName = target.value;
     memes.forEach((meme)=>{
       if(meme.name === imgName) {
          selectedUrl = meme.url
       }
     })
    setImgUrl(selectedUrl);
  }  

  

    const onClickDownload = (e)  =>{
      e.preventDefault();
      html2canvas(document.querySelector("#capture"),{allowTaint:true,useCORS:true}).then(canvas => {
        const finalMeme = canvas.toDataURL("img/png")
        const link = document.createElement('a');
        link.download='myMeme.png';
        link.href=finalMeme;
        link.click();
    });
    }
 

  return (
    <div className="App">

      <img className='logo' src={"/assets/memeit_logo.png"} alt="logo" />

      <div className='content_wrapper'>

        <div className="header_wrapper">
           <Header className='header'/>
        </div>
    
        <div className='controls_wrapper'>
          <Form 
            memesOptions={memes}
            onSelectedImg={onSelectedImg} 
            onTextChange={onTextChange}
            onClickDownload={onClickDownload}/>

          <Display className='display'
            imgName={imgUrl} 
            upperLine={textInput.upperTextInput} 
            lowerLine={textInput.lowerTextInput} />
        </div>
      </div>

    </div>
  );
}

export default App;
