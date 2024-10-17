import React from "react";

const FormRow = () => {
  return (
    <FormRow>
      <Label htmlFor="name">Cabin name</Label>
      <Input
        type="text"
        id="name"
        {...register("name", { required: "This field is required" })}
      />
      {errors?.name?.message && <Error>{errors.name.message}</Error>}
    </FormRow>
  );
};

export default FormRow;
