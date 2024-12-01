'use client'
import Ads from "@/components/Navbar/ads";
import Categories from "@/components/Navbar/Categories";
import ListingTabs from "@/components/Navbar/ListingTabs";

import NavigationBar from "@/components/Navbar/NavigationBar";
import { SearchIcon } from "@/components/Navbar/SearchIcon";
import { Input } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col items-center">
        <div className="container flex bg-primary-700 justify-center h-auto mb-5">
          <div className="rounded-xl w-[85%] bg-cover h-40 mt-10 flex flex-col justify-center items-center">
            <h1 className="mb-5 text-white text-3xl">Who do you wanna outsource?</h1>
            <Input
              classNames={{
                base: "w-[70%] h-12",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full shadow-s border font-normal text-default-500 bg-white",
              }}
              placeholder="Type to search..."
              size="sm"
              startContent={<SearchIcon size={18} width={undefined} height={undefined} />}
              type="search"
            />
          </div>
        </div>
        {/* <Ads /> */}
        {/* <Categories /> */}
        <ListingTabs />
      </div>
    </>
  );
}
