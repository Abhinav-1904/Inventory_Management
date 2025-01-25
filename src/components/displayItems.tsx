import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import CustomTable from "./customisedTable";
import { useState } from "react";
import CardReveal from "./cardReveal";

type Item = {
  id: number;
  name: string;
  category: string;
  quantity: number;
};
interface DisplayItemsProps{
  items:Item[]
}

export function DisplayItems({items}:DisplayItemsProps){
  const sortedItems = [...items].sort((a, b) => a.quantity - b.quantity);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All",...new Set(items.map((item) => item.category))];
  const filteredItems = selectedCategory === "All" ? items : items.filter((item) => item.category === selectedCategory);

  return(
    <div className="px-8">
      <CardReveal>
        <div>
          <h4 className="text-2xl font-semibold mb-2">
            Current Items Are :
          </h4>
          <CustomTable description="A list of your inventory items." items={items}></CustomTable>
        </div>
      </CardReveal>
      <CardReveal>
        <div>
          <h4 className="text-2xl font-semibold py-3">
            Sorted Items by quantity are :
          </h4>
          <CustomTable description="A list of your sorted inventory items by quantity." items={sortedItems}></CustomTable>
        </div>
      </CardReveal>
      <CardReveal>
        <div className="pb-8">
          <h4 className="text-2xl font-semibold py-3">
            Filter Items by categories
          </h4>
          <div className="mb-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Select Categories</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                  {categories.map((category,index)=>(
                    <DropdownMenuRadioItem key={index} value={category}>{category}</DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <CustomTable 
            description={`A filtered list of your inventory items by ${selectedCategory}.`} 
            items={filteredItems}>
          </CustomTable>
        </div>
      </CardReveal>
    </div>
  )
}