import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./LoginPage.css";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Please Enter valid Email address" })
    .min(3),
  password: z
    .string()
    .min(8, { message: "Password should br at least 8 characters" }),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (FormData) => console.log(FormData);
  // console.log(errors);

  return (
    <section className="align-center form-page">
      <form
        action=""
        className="authentication-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Login Form</h2>
        <div className="form-inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="form-text-input"
              placeholder="Enter your email"
            />
            {errors.email && (
              <em className="form-error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="form-text-input"
              placeholder="Enter your password"
            />
            {errors.password && (
              <em className="form-error">{errors.password.message}</em>
            )}
          </div>
          <button type="submit" className="search-button form-submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
