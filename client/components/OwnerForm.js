import React from 'react';
import { useForm } from 'react-hook-form';

export default function OwnerForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form className="Owner" onSubmit={handleSubmit(onsubmit)}>
      <h1>Owner Sign Up</h1>
      <label>First Name:</label>
      <input name="firstName" ref={register({ required: true })} />

      <label>Last Name:</label>
      <input name="lastName" ref={register({ required: true })} />

      <label>Company Name:</label>
      <input name="companyName" ref={register({ required: true })} />

      <label>Company Address:</label>
      <input name="companyAddress" ref={register({ required: true })} />

      <label>Email:</label>
      <input name="email" ref={register({ required: true })} />

      <label>Password:</label>
      <input name="password" ref={register({ required: true })} />

      <input type="submit" />
    </form>
  );
}
