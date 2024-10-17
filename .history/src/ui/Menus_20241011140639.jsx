import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

const Menus = ({ columns, children }) => {
  return (
    <MenusContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </MenusContext.Provider>
  );
};

const Toggle = ({ id }) => {
  const { columns } = useContext(MenusContext);
  return (
    <StyledHeader role="row" columns={columns} as={"header"}>
      {children}
    </StyledHeader>
  );
};

const List = ({ id }) => {
  const { columns } = useContext(MenusContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
};

const Button = ({ id, children }) => {
  if (!data.length) return <Empty>No data to show</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
