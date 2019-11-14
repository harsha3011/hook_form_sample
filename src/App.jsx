import React from 'react';
import useForm from 'react-hook-form';
import { Button } from 'semantic-ui-react'
export default function App() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) } 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{display:'grid'}}>
      <label style={{fontWeight:'bold'}}>ADD A COMMENT</label>
      <textarea name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <div style={{display:'inline'}}>
      <Button color='black'>
      Noted
    </Button>
    <Button color='black'>
      Actioned
    </Button>
    <Button color='black'>
      Notified field force
    </Button>
      </div>
      <input name="example" defaultValue="test" ref={register} />
      <input type="submit" />
      </div>
    </form>
  )
}