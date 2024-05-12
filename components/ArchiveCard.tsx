import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
import Link from 'next/link';
interface Props {
  title: string;
  des: string;
  listItem: string[];
  link: string;
  github:string;
}

const ArchiveCard = ({ title, des, listItem, link,github }: Props) => {
  return (
    // <Link href={link} target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <span className="flex">
          <Link href={github}  target="_blank">
          <TbBrandGithub className="mx-2 text-2xl hover:text-textGreen" />
          </Link>
          <Link href={link}  target="_blank" >
          <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />
          </Link>
          </span>
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
          <p className="text-sm mt-3">{des}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    // </Link>
  );
};

export default ArchiveCard;
