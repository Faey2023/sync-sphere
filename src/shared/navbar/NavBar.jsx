import MenuItems from "./MenuItems";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <MenuItems />
          <img
            className="h-20 w-80 mt-2"
            src="https://i.ibb.co/c39zVYM/logo.png"
            alt="website logo"
          />
      </div>
    </>
  );
};

export default NavBar;
