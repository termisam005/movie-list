import React, { useState } from 'react';
import { useEffect } from 'react';
import Counter from './components/Counter';
import Movie from './components/Movie';


function App() {

  // const [count, setCount] = useState(0);
  // const [kossie, setKossie] = useState(0);
  // useEffect(()=>{
  //   console.log(count);
  // },[count]);
  // const increment = () =>{
  //   setCount(count + 1);
  // }
  // return (
  //   <div className="App">
  //     <h1>Kossie Coder</h1>
  //     <button type='button' onClick={increment}>Click1</button>
  //     <button type='button' onClick={()=>setKossie(kossie + 1)}>Click2</button>
  //   </div>
  // );

  // const [buttonName, setButtonName] = useState('클릭');
  // return (
  //   <div className="App">
  //     <h1>Kossie Coder</h1>
  //     <Counter click={'click1'} />
  //     <Counter click={buttonName} />
  //     <Counter />
  //   </div>
  // );

  // const [condition, setCondition] = useState(true);
  // const toggle = () => setCondition(!condition);
  // useEffect(()=>{
  //   console.log(condition);
  // },[condition]);
  // return (
  //   <div className="App">
  //     <h1>Kossie Coder</h1>
  //     {condition
  //       ? <div>True</div> 
  //       : <div>False</div>
  //     }
  //     <button type='button' onClick={toggle}>Toggle</button>
  //   </div>
  // );


  // const [movies, setMovies] = useState([
  //   {id:'cd1', title:'corder1', year:2001},
  //   {id:'cd2', title:'corder2', year:2002},
  //   {id:'cd3', title:'corder3', year:2003}
  // ]);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movies, setMovies] = useState([]);
  const [titleError, setTitleError] = useState('');
  const [yearError, setYearError] = useState('');

  const removeMovie = (id) =>{
    setMovies(movies.filter(movie => {
      return(movie.id !== id);
    }));
  }

  const renderMovies = movies.length? movies.map(movie => {
    return(
      <Movie
        movie={movie} 
        key={movie.id} 
        removeMovie={removeMovie}
      />
    )
  }) : '추가된 영화가 없습니다.';

  const validateForm = () =>{
    resetError();

    let validated = true;
    if(!movieTitle){
      setTitleError('영화제목을 넣어주세요');
      validated = false;
    }
    if(!movieYear){
      setYearError('개봉년도를 넣어주세요');
      validated = false;
    }
    return validated;
  };

  const resetForm = () => {
    setMovieTitle('');
    setMovieYear('');
  };

  const resetError = () =>{
    setTitleError('');
    setYearError('');
  }

  const addMovie = (e) =>{
    e.preventDefault();
    if(validateForm()){
      setMovies([
        ...movies,{
          id:Date.now(),
          title:movieTitle,
          year:movieYear
        }
      ]);
      resetError();
    }
    resetForm();
  };

  return (
    <div className="App">

      <h1>Movie list</h1>
      <form onSubmit={addMovie}>
        <input type='text'
          placeholder='영화제목'
          value={movieTitle}
          onChange={(e)=>setMovieTitle(e.target.value)}
        />
        <br/>
        <div style={{color:'red'}}>{titleError}</div>
        <input type='text'
          placeholder='개봉년도'
          value={movieYear}
          onChange={(e)=>setMovieYear(e.target.value)}
        />
        <br/>
        <div style={{color:'red'}}>{yearError}</div>
        
        <button type='submit'>영화추가</button>
      </form>
      {renderMovies}

    </div>
  );
}

export default App;
