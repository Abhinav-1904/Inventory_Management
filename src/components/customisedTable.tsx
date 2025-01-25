import {Dispatch,SetStateAction} from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Item = {
  id: number;
  name: string;
  category: string;
  quantity: number;
};
interface CustomItemsProps{
  items:Item[],
  description:string,
}

export default function CustomTable({items,description}:CustomItemsProps){
  return(
    <Table>
      <TableCaption>{description}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id} className={`font-medium ${item.quantity<10 ? 'text-red-400':''}`}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell className="text-right" >{item.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}