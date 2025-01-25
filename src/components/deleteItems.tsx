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
interface DeleteItemsProps{
  items:Item[]
  setItems: Dispatch<SetStateAction<Item[]>>;
}

export function DeleteItems({items,setItems}:DeleteItemsProps){

  const [id,setId]=useState<number|null>(null);
  const [error, setError] = useState<string | null>(null)

  const handleDeleteItem = (id:number) => {
    const itemToDelete = items.find((item: Item) => item.id === id)
    if (itemToDelete) {
      setItems(items.filter((item: Item) => item.id !== id))
      setError(null)
    } else {
      setError("Item ID not found")
    }
  };

  return (
    <div className="pt-3 pl-8 text-xl font-medium">
      Delete items in Inventory
      <Card className="w-[350px] mt-4">
        <CardHeader>
          <CardTitle>Delete Items</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-3">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="ID">ID</Label>
                <Input id="ID" placeholder="ID of item to delete" onChange={(e)=>{setId(Number(e.target.value))}}/>
              </div>
            </div>
          </form>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="destructive" onClick={()=> id && handleDeleteItem(id)}>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  )
}