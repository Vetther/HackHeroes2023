import { SidebarIcons } from "./icons/sidebar";
import SidebarNavigation from "./sidebar-navigation";
import { Button } from "./ui/button";

const Sidebar = () => {
    return (
        <div className="flex flex-col max-w-[275px] w-full border-r border-gray-100">
            <div className="flex justify-center mt-7 pb-[15px]">
                <p className="font-dm-sans text-gray-700 text-[15px] font-bold leading-snug">
                    Egzaminy
                </p>
            </div>
            <SidebarNavigation />
            <div className="px-8 pb-24">
                <div className="relative flex flex-col items-center bg-indigo-500 h-[200px] w-full rounded-lg justify-between py-6 overflow-hidden">
                    <div className="flex flex-col gap-2 items-center">
                        <SidebarIcons.banner />
                        <p className="text-white text-xs font-dm-sans font-medium leading-none">
                            Potrzebujesz pomocy?
                        </p>
                        <p className="text-white opacity-80 text-xs font-dm-sans font-medium leading-none">
                            Skontaktuj się z nami?
                        </p>
                    </div>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="z-10 px-10"
                    >
                        Kontakt
                    </Button>
                    <SidebarIcons.bannerBlob className="absolute -top-28 -right-16" />
                    <SidebarIcons.bannerBlob2 className="absolute -bottom-36 -left-40" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
