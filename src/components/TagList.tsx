import { svgIcons } from "../Data/SVGs";

interface TagProps {
  value: string;
}

const Tag: React.FC<TagProps> = ({ value }) => {
  return (
    <li className="w-full rounded-r-full hover:bg-blue-100 pr-3 py-2 pl-5 cursor-pointer active:brightness-90 hover:text-black">
      <span>{svgIcons.tagSvg}</span>
      {value}
    </li>
  );
};

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
