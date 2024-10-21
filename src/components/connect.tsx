import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Input } from "./ui/input";
import Form from "./form";

export function Connect() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-black dark:hover:border-purple-900 dark:hover:bg-transparent dark:bg-purple-900 dark:text-white rounded-full hover:bg-transparent hover:text-black border-2 border-black">
          Let's Connect
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <Form />
      </DialogContent>
    </Dialog>
  );
}
