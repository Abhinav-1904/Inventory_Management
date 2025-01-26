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

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const categories = ["All",...new Set(items.map((item) => item.category))];
  const filteredItems = selectedCategory === "All" ? items : items.filter((item) => item.category === selectedCategory);
  const sortedItems = [...filteredItems].sort((a, b) =>
    sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return(
    <div className="px-8">
      <CardReveal>
        <div className="pb-8">
          <h4 className="text-2xl font-semibold py-3">
            Inventory Management Table
          </h4>
          <div className="flex">
            <div className="mb-2 mr-2">
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
            <div className="mb-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Sort by</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Sort Order</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={sortOrder}
                    onValueChange={(value) => setSortOrder(value as "asc" | "desc")}>
                    <DropdownMenuRadioItem value="asc">Ascending</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="desc">Descending</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <CustomTable 
             description={`Showing ${ selectedCategory === "All" ? "all" : selectedCategory } items sorted by ${sortOrder} quantity.`}
            items={sortedItems}>
          </CustomTable>
        </div>
      </CardReveal>
    </div>
  )
}