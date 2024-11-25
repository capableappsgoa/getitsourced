import { Tabs, Tab } from "@nextui-org/react";
import { GalleryIcon } from "./GalleryIcon";
import { MusicIcon } from "./MusicIcon";
import { VideoIcon } from "./VideoIcon";
import CardsTab from "./CardsTab";
export default function ListingTabs() {
  return (
    <div className="flex w-[95%] flex-col">
      <Tabs aria-label="Options"color="primary" variant="bordered">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon />
              <span>Photos</span>
            </div>
          }
        >
        <CardsTab />
      </Tab>
      <Tab
        key="music"
        title={
          <div className="flex items-center space-x-2">
            <MusicIcon />
            <span>Music</span>
          </div>
        }
      />
      <Tab
        key="videos"
        title={
          <div className="flex items-center space-x-2">
            <VideoIcon />
            <span>Videos</span>
          </div>
        }
      />
    </Tabs>
  </div >  
  );
}