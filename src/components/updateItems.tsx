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
interface UpdateItemsProps{
  items:Item[]
  setItems: Dispatch<SetStateAction<Item[]>>;
}

export function UpdateItems({items,setItems}:UpdateItemsProps){

  const [name,setName]=useState<string|null>(null);
  const [category,setCategory]=useState<string|null>(null);
  const [quantity,setQuantity]=useState<number|null>(null);
  const handleUpdateItem = () => {
    const item = items.find((item) => item.name === name);
    if (!item) return;
    if (name && category && quantity!=null && !isNaN(quantity)) {
      setItems(
        items.map((item) =>
          item.name === name ? { ...item, name, category, quantity } : item
        )
      );
    }
    setName(null);
    setCategory(null);
    setQuantity(null);
  };
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuantity(value === '' ? null : Number(value));
  };

  return (
    <div className="pt-3 pl-8 text-xl font-medium">
      Update items in Inventory
      <Card className="w-[350px] mt-4">
        <CardHeader>
          <CardTitle>Update Items</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-3">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter Name of item to Update" onChange={(e)=>{setName(e.target.value)}}/>
              </div>
              <div className="flex flex-col space-y-1.5 mt-2">
                <Label htmlFor="Category">Category</Label>
                <Input id="Category" placeholder="New Category(if any)" onChange={(e)=>{setCategory(e.target.value)}}/>
              </div>
              <div className="flex flex-col space-y-1.5 mt-2">
                <Label htmlFor="Quantity">Quantity</Label>
                <Input id="Quantity" placeholder="New Quantity of item" onChange={handleQuantityChange}/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" onClick={()=>handleUpdateItem()}>Update</Button>
        </CardFooter>
      </Card>
    </div>
  )
}