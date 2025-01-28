import Tag from "./Tag";

const Tags = ["Typescript", "Database", ".Net", "React"];

const TagList = () => {
  return (
    <div>
      <h1 className="pl-5 text-base text-gray-500 py-3">Tags</h1>
      <ul>
        {Tags.map((tag, index) => (
          <Tag key={index} value={tag} />
        ))}
      </ul>
    </div>
  );
};

export default TagList;
