import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input, Select } from "../../components/formTable/Inputs";

const DetailForm = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/table");
  };

  return (
    <div className="card w-50 m-auto my-5 d-flex justify-content-center">
      <h2 style={{ margin: "auto" }}>Form</h2>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Name"
            type="text"
            name="name"
            register={register}
            errors={errors}
            required
            errMsg='This field is required'
          />{" "}
          <br />
          <Input
            label="Email"
            type="email"
            name="email"
            register={register}
            errors={errors}
            required
            errMsg='This field is required'
          />{" "}
          <br />
          <Input
            label="Password"
            type="password"
            name="password"
            register={register}
            errors={errors}
            required
            errMsg='This field is required'
          />{" "}
          <br />
          <Input
            label="Date of Birth"
            type="date"
            name="dob"
            register={register}
            errors={errors}
            required
            errMsg='This field is required'
          />{" "}
          <br />
          <Input
            label="Age"
            type="number"
            name="age"
            register={register}
            errors={errors}
            required
            errMsg='This field is required'
          />{" "}
          <br />
          <label className="mx-2 my-2">Gender </label>
          <Input
            label="Male"
            type="radio"
            name="Gender"
            register={register}
            errors={errors}
          />
          <Input
            label="Female"
            type="radio"
            name="Gender"
            register={register}
            errors={errors}
            required
            errMsg='This field is required'
          />{" "}
          <br />
          <Select
            label="Interest"
            values={["React Js", "Node Js", "Full Stack Development"]}
            register={register}
            errors={errors}
            name="interest"
            required
            errMsg='This field is required'
          />{" "}
          <br />
          <label className="mx-2 my-2">Description </label>
          <textarea {...register("description")} />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default DetailForm;