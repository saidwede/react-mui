import { ArrowRight2, Setting, InfoCircle } from 'iconsax-react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IconButton } from '@mui/material';

export default function CustomizedAccordions() {
  return (
    <div className='bg-[#ffffff] rounded-[10px] px-[14px] py-[8px]'>
      <div className='flex flex-col gap-[10px]'>
        <div className="flex gap-[6px] cursor-pointer justify-between">
          <div className='flex items-center gap-[6px]'>
            <Setting color="#212529" size={24} />
            <span>Preferences</span>
          </div>
          <IconButton className="-mr-[9px]">
            <ArrowRight2 color="#64676C" size="16" />
          </IconButton>
        </div>

        <div className="flex justify-center">
            <div className="h-px bg-[#E9ECEF] w-[calc(100%-40px)]"></div>
        </div>

        <div className="flex gap-[6px] cursor-pointer justify-between">
          <div className='flex items-center gap-[6px]'>
            <InfoCircle color="#212529" size={24} />
            <span>Help & Support</span>
          </div>
          <IconButton className="-mr-[9px]">
            <ArrowRight2 color="#64676C" size="16" />
          </IconButton>
        </div>
      </div>
            {/* <Accordion className="shadow-none border-none">
                <AccordionSummary
                expandIcon={<ArrowRight2 color="#64676C" size={14} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="text-dark-primary"
                >
                    <div className="flex gap-[6px]">
                        <Setting color="#212529" size={24} />
                        <span>Preferences</span>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <div className="flex justify-center">
                <div className="h-px bg-[#E9ECEF] w-[calc(100%-40px)]"></div>
            </div>
            <Accordion className="shadow-none border-none before:opacity-0">
                <AccordionSummary
                expandIcon={<ArrowRight2 color="#64676C" size={14} />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="text-dark-primary"
                >
                    <div className="flex gap-[6px]">
                        <InfoCircle color="#212529" size={24} />
                        <span>Help & Support</span>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion> */}
      </div>
  );
}
