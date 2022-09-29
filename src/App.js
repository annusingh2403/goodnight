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
                {print ? <div>  <img style={{width: '10rem'}} src="https://scontent.fbho4-1.fna.fbcdn.net/v/t39.30808-6/279926330_1376922682807728_1599240952028023856_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=0DpXo-zbslwAX8CKvhL&_nc_ht=scontent.fbho4-1.fna&oh=00_AT9GtFpmw9V1p5LI6g_poRjnMUxNhJOsw75uOao67i4fGw&oe=633A5819" alt="" /><br/> <span style={{color:'steelblue',fontFamily: 'Dancing Script',fontSize: '35px',marginLeft: '10px'}}><br/> {name}</span></div> : null}
            </div>
        </div>
      </div>
  </>;
};

export default MiniOne;
