import { ChevronsUpDown, Search } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useWallet } from "@/context/walletContext";

export const Header = ({ name, id }: { name?: string; id?: string }) => {
  const { account } = useWallet();
  return (
    <div className="grid grid-cols-5">
      <div className="rounded-lg border border-primary-300 flex flex-row px-2 py-1 font-Inconsolata self-center col-span-3 col-start-1 overflow-hidden md:col-span-2 md:col-start-2">
        <button>
          <Search className="opacity-60 h-5 w-5" />
        </button>
        <input
          type="text"
          placeholder="search"
          className="focus-visible:outline-none"
        />
      </div>
      <div className="p-2 self-end justify-self-end flex flex-col items-center justify-center gap-1 col-span-1 col-start-5">
        <Avatar>
          <AvatarImage src={"/images/defaultProfile.png"} />
        </Avatar>
        <Popover>
          <PopoverTrigger className="flex flex-row items-center justify-center font-Inconsolata font-semibold">
            {name && (
              <>
                {name.split(" ")[0]}
                <ChevronsUpDown className="opacity-60 h-4 w-4" />
              </>
            )}
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-fit items-center font-Inconsolata bg-white">
            <div>{name}</div>
            <div>{id}</div>
            <div>{`${account?.slice(0, 5)}...${account?.slice(-5)}`}</div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
