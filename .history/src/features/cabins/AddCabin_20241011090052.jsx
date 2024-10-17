import React from "react";

const AddCabin = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowForm((show) => !show)}>
        Add new Cabin
      </Button>
      {showForm && <CreateCabinForm />}
    </div>
  );
};

export default AddCabin;
