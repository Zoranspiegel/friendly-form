import StyledForm from './StyledForm';
import { useState } from 'react';
import validate from '../validators';

const initialState = {
  touched: false,
  x: '',
  y: '',
  z: '',
};

const initialScope = {
  blur: [],
  focus: []
};

////////////////////////////////////////////////////
const Form = () => {
  const [scope, setScope] = useState(initialScope);
  const [state, setState] = useState(initialState);
  const [error, setError] = useState({});

  //////////////////////////////
  const handleChange = (e) => {
    setState({
      ...state,
      touched: true,
      [e.target.name]: e.target.value
    });
    setError(validate({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  /////////////////////////////
  const handleFocus = (e) => {
    if(!scope.focus.includes(e.target.name)) {
      setScope({ ...scope, focus: [...scope.focus, e.target.name]})
    }
    if(scope.blur.includes(e.target.name)) {
      setScope({ ...scope, blur: [...scope.blur.filter(el => el !== e.target.name)]})
    }
  };

  ////////////////////////////
  const handleBlur = (e) => {
    if(!scope.blur.includes(e.target.name)) {
      setScope({ ...scope, blur: [...scope.blur, e.target.name]})
    }
  };

  //////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setState(initialState);
    setScope(initialScope);
  };

  /////////
  return (
    <StyledForm>
      <div className='container'>
        <h2>FRIENDLY FORM</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            value={state.x}
            name='x'
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={(scope.blur.includes('x') && error.x ) ? 'red' : null}
            placeholder='x...'
          />
          {(error.x && scope.focus.includes('x')) ? <p className={scope.blur.includes('x') ? 'error' : null}>{error.x}</p> : <br/>}
          <input
            value={state.y}
            name='y'
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={(scope.blur.includes('y') && error.y ) ? 'red' : null}
            placeholder='y...'
          />
          {(error.y && scope.focus.includes('y')) ? <p className={scope.blur.includes('y') ? 'error' : null}>{error.y}</p> : <br/>}
          <input
            value={state.z}
            name='z'
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={(scope.blur.includes('z') && error.z ) ? 'red' : null}
            placeholder='z...'
          />
          {(error.z && scope.focus.includes('z')) ? <p className={scope.blur.includes('z') ? 'error' : null}>{error.z}</p> : <br/>}
          <button
            type='submit'
            disabled={!state.touched || Object.entries(error).length}
            className='submitBtn'
          >
            SUBMIT
          </button>
        </form>
      </div>
    </StyledForm>
  );
};

export default Form;
