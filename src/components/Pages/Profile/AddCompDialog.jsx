import { CirclePlus} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from "@/components/ui/scroll-area";
import AddForm from "./AddCompForm";

  function AddCompDialog() {

    return (
    <Dialog>
    <DialogTrigger>
        <CirclePlus color="#64748b" size={28} className="min-w-10 h-10 p-1 hover:bg-muted rounded-md" />
    </DialogTrigger>  
    <DialogContent className='h-[70%] p-4'>
    <DialogHeader>
      <DialogTitle>Добавить предприятие</DialogTitle>
      <DialogDescription>Добавьте новое предприятие и начните вести финансовую отчётность</DialogDescription>
    </DialogHeader>
    <ScrollArea className='p-4'>
        <AddForm/>
    </ScrollArea>   
    </DialogContent>
    </Dialog>
  )
}
export default AddCompDialog