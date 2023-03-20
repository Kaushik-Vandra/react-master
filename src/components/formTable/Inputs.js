import React from "react";

export const Input = ({ label, type, name, register, errors, required,  errMsg }) => {

  return (
    <>
      <label className="mx-2 my-2">{label}</label>
      <input
        type={type}
        {...register(name, { required: errMsg })}
      />
      {errors[name] && (
        <p style={{ color: "red" }} >
          {errors[name].message}
        </p>
      )}
    </>
  );
};

export const Select = ({ label, values, register, errors, name, errMsg, required }) => {

  return (
    <>
      <label className="mx-2 my-2">{label}</label>
      <select {...register(name, { required: errMsg })} >
        {values.map((value, index) => {
          return (
            <option value={value} key={index}>
              {value}
            </option>
          );
        })}
      </select>
      {errors[name] && (
        <p style={{ color: "red" }} >
          {errors[name].message}
        </p>
      )}
    </>
  );
};
