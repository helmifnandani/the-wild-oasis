import React, { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new Cabin
      </Button>
      {isOpenModal && <CreateCabinForm />}
    </div>
  );
};

export default AddCabin;
