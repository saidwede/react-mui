import { Button, IconButton } from "@mui/material";
import {
  Add,
  ArrowRight2,
  OceanProtocol,
  SearchNormal1,
  Setting4,
} from "iconsax-react";
import CustomizedAccordions from "./CustomizedAccordions";

export default function SidePanel() {
  return (
    <div className="flex flex-col gap-[18px] h-full w-full lg:p-0 p-[20px]">
      <div className="flex justify-center gap-[10px]">
        <OceanProtocol size="24" color="#4F4F4F" />
        <div className="text-[20px]">Logo here</div>
      </div>
      <div>
        <Button
          variant="outlined"
          className="[&&]:border-primary gap-[8px] [&&]:bg-primary [&&]:bg-opacity-10 [&&]:rounded-[10px] [&&]:h-[46px] w-full"
        >
          <span>New Chat</span>
          <Add color="#007BFF" size="24" />
        </Button>
      </div>
      <div className="flex flex-grow flex-col gap-[20px]">
        <div className="flex justify-between">
          <IconButton aria-label="Search" className="-ml-[9px]">
            <SearchNormal1 color="#64676C" size="24" />
          </IconButton>
          <IconButton aria-label="Setings" className="-mr-[9px]">
            <Setting4 color="#64676C" size="24" />
          </IconButton>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[18px]">Recent</span>
          <IconButton className="-mr-[9px]">
            <ArrowRight2 color="#64676C" size="18" />
          </IconButton>
        </div>
        <div className="flex-grow flex relative">
            <div className="flex flex-col gap-[16px] lg:h-[calc(100vh-456px)] h-[calc(100vh-463px)] overflow-y-auto">
                <RecentInfos
                    title="Today"
                    infos={["What is Ai assistant?", "Best laptop brands and features"]}
                />
                <RecentInfos
                    title="Yesterday"
                    infos={[
                        "How many days are there in a year?", 
                        "Can AI lead to job displacement?",
                        'What role does AI play in addressing global challenges, such as climate change or poverty reduction?',
                        'Who is John Doe?',
                        'Lorem ipsum dorem sit amet convertinos'
                    ]}
                />
                <RecentInfos
                    title="Last week"
                    infos={[
                        "How many days are there in a year?",
                        "Can AI lead to job displacement?",
                        'Lorem ipsum dorem sit amet convertinos', "", ''
                    ]}
                />
            </div>
            <div className="bottom-0 left-0 absolute w-[calc(100%-12px)] h-[30px] bg-gradient-to-t from-[#F9F9F9] to-[#F9F9F999]"></div>
        </div>
        <div className="flex flex-col gap-[20px]">
            <CustomizedAccordions />
            <div className="rounded-[10px] border-border-highlight border-[1px] flex justify-between items-center pt-[6px] pr-[8px] pb-[6px] pl-[12px]">
                <div className="flex gap-[8px] items-center">
                    <OceanProtocol size={24} color="#007BFF" />
                    <div className="">
                        <div className="text-[16px] font-[400] text-dark-primary">Basic Plan</div>
                        <div className="text-[10px] font-[300] text-dark-secondary">20/20 left credit</div>
                    </div>
                </div>
                <Button variant="text" color="inherit" className="bg-tertiary h-[26px]">
                    <span className="text-[12px] capitalize text-white">Upgrade</span>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}

type recentInfosProps = {
  title: string;
  infos: string[];
};

const RecentInfos: React.FC<recentInfosProps> = ({ title, infos }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <span className="text-[16px] text-dark-primary font-[400]">{title}</span>
      {infos.map((info, index) => (
        <span key={index} className="text-[16px] text-dark-dark font-[300] truncate">
          {info}
        </span>
      ))}
    </div>
  );
};
