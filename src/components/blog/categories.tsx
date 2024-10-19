import { AlignJustify } from 'lucide-react';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from '@/components/ui/menubar';
import { Button } from '../ui/button';

export default function Categories() {
	return (
		<Menubar className=" bg-transparent border-none ">
			<MenubarMenu>
				<MenubarTrigger
					className="data-[state=open]:bg-transparent data-[state=open]:text-white focus:bg-transparent focus:text-white bg-transparent border-none "
					asChild>
					<div className="hover:underline text-white text-sm flex items-center gap-2">
						<AlignJustify width={10} />
						<span>Categories</span>
					</div>
				</MenubarTrigger>
				<MenubarContent className="w-56 z-50 bg-black/30 text-white backdrop-blur-md max-h-64 fixed top-2 border-none">
					<MenubarItem>
						<span>Education</span>
					</MenubarItem>
					<MenubarItem>
						<span>Arts & Entertainment</span>
					</MenubarItem>
					<MenubarItem>
						<span>Sports</span>
					</MenubarItem>
					<MenubarItem>
						<span>Science & Technology</span>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
