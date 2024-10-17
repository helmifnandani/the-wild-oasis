import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "all", label: "All" },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
