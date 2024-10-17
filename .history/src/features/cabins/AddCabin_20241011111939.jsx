import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open onClick={} opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

// const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal((show) => !show)}>
//           <CreateCabinForm
//             onCloseModal={() => setIsOpenModal((show) => !show)}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// };

export default AddCabin;
