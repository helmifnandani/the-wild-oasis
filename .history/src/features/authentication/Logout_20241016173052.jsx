import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";

const Logout = () => {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
};

export default Logout;
