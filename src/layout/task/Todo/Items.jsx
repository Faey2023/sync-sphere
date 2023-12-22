import Completed from "./Completed";
import Ongoing from "./Ongoing";
import Todo from "./Todo";

const Items = () => {
  return (
    <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto">
      <div className="col-span-4">
        <Todo />
      </div>
      <div className="col-span-4">
        <Ongoing />
      </div>
      <div className="col-span-4">
        <Completed />
      </div>
    </div>
  );
};

export default Items;
