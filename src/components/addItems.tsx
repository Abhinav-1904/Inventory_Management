import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Dispatch,SetStateAction, useState} from "react"

type Item = {
  id: number;
  name: string;
  category: string;
  quantity: number;
};
interface addItemsProps{
  items:Item[]
  setItems: Dispatch<SetStateAction<Item[]>>;
}

export function AddItems({items,setItems}:addItemsProps){

  const [name,setName]=useState<string|null>(null);
  const [category,setCategory]=useState<string|null>(null);
  const [quantity,setQuantity]=useState<number|null>(null);

  const handleAddItem = () => {
    if (name && category && quantity!=null && !isNaN(quantity)) {
      setItems([
        ...items,
        { id: Date.now(), name, category, quantity },
      ]);
      setName(null);
      setCategory(null);
      setQuantity(null);
    }
  };
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuantity(value === '' ? null : Number(value));
  };

  return (
    <div className="pl-6 pt-3 text-xl font-medium">
      Add items in Inventory
      <Card className="w-[350px] mt-4">
        <CardHeader>
          <CardTitle> Add Items</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-3">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your item" onChange={(e)=>{setName(e.target.value)}}/>
              </div>
              <div className="flex flex-col space-y-1.5 mt-2">
                <Label htmlFor="Category">Category</Label>
                <Input id="category" placeholder="Category of your item" onChange={(e)=>{setCategory(e.target.value)}}/>
              </div>
              <div className="flex flex-col space-y-1.5 mt-2">
                <Label htmlFor="Quantity">Quantity</Label>
                <Input id="quantity" placeholder="Quantity of your item" onChange={handleQuantityChange}/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" onClick={()=>handleAddItem()}>Add</Button>
        </CardFooter>
      </Card>
    </div>
  )
}