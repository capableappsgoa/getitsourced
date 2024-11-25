import { Tabs, Tab } from "@nextui-org/react";

export default function Categories() {
  const variants = ["light"];

  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Tabs
          key={variant}
          color="success"
          classNames={{
  
            tabContent: "group-data-[selected=true]:text-[#ffffff]" 
          }}
          variant={variant as any}
          aria-label="Tabs variants"

        >
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </Tabs>
      ))}
    </div>
  );
}
