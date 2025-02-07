import CardHeader from "./CardHeader";
import CardMain from "./CardMain";
import CardFooter from "./CardFooter";

const SideCard = () => {
  return (
    <div className="flex flex-col p-6 gap-2 sm:gap-0 border-[1px] border-gray-500 rounded-3xl shrink-0 max-w-full min-h-[500px] max-h-max">
      <CardHeader title={"AXEL"}>i`am a programmer</CardHeader>
      <CardMain img={"image/cpu-1.png"} email="axel.crisdy@gmail.com">
        From Jakarta, Indonesia
      </CardMain>
      <CardFooter btn="GET MORE INFO" foot="Just Average CS Student" />
    </div>
  );
};

export default SideCard;
