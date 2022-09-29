import React, {useState} from 'react';
import './App.css';

const MiniOne = () => {

  const [name, setName] = useState(null);
  const [print, setPrint] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
    setPrint(false);
  }

  return <>
      <div>
        <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
            <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>W</span>elcome</p>
        </div>
        <div className='minione'>
            <input type="text" placeholder='Name' onChange={handleInput}/>
            <button type='submit' onClick={() => setPrint(true)}>enter</button>
            <div className='name'>
                {print ? <div>  <img style={{width: '10rem'}} src="https://cdn.cdnparenting.com/articles/2022/03/18141224/1714459507.webp" alt="" /><br/> <span style={{color:'steelblue',fontFamily: 'Dancing Script',fontSize: '35px',marginLeft: '10px'}}><br/> {name}</span></div> : null}
            </div>
        </div>
      </div>
  </>;
};

export default MiniOne;
