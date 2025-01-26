'use client'
import { AddItems } from "@/components/addItems";
import { AppbarReveal } from "@/components/appbarReveal";
import CardReveal from "@/components/cardReveal";
import { DeleteItems } from "@/components/deleteItems";
import { DisplayItems } from "@/components/displayItems";
import { UpdateItems } from "@/components/updateItems";
import { useState } from "react"
import * as React from "react"

export default function Home(){
  const [items,setItems] = useState([
    { id: 1, name: "Apples", category: "Fruits", quantity: 20 },
    { id: 2, name: "Bananas", category: "Fruits", quantity: 5 },
    { id: 3, name: "Carrots", category: "Vegetables", quantity: 15 },
    { id: 4, name: "Oranges", category: "Fruits", quantity: 8 },
    { id: 5, name: "Tomatoes", category: "Vegetables", quantity: 12 },
    { id: 6, name: "Potatoes", category: "Vegetables", quantity: 25 },
    { id: 7, name: "Chicken Breast", category: "Meat", quantity: 10 },
    { id: 8, name: "Salmon", category: "Fish", quantity: 7 },
    { id: 9, name: "Milk", category: "Dairy", quantity: 18 },
    { id: 10, name: "Cheese", category: "Dairy", quantity: 3 },
  ]);

  return (
    <div className="font-sans text-white">
      <AppbarReveal>
        <div>
          <h1 className="flex justify-center pt-4 font-bold text-3xl">
            Inventory Management
          </h1>
          <div className="flex justify-center my-3">
            <a href='#Section1' className="pr-4 hover:cursor-pointer hover:text-gray-300">Operations</a>
            <a href="#Section2" className="hover:cursor-pointer pr-11 hover:text-gray-300">Display Area</a>
          </div>
        </div>
      </AppbarReveal>
      <section id='Section1' className="grid grid-cols-3 pt-2 h-screen">
        <CardReveal>
          <AddItems items={items} setItems={setItems}></AddItems>
        </CardReveal>
        <CardReveal>
          <UpdateItems items={items} setItems={setItems}></UpdateItems>
        </CardReveal>
        <CardReveal>
          <DeleteItems items={items} setItems={setItems}></DeleteItems>
        </CardReveal>
      </section>
      <section id='Section2' className="h-screen">
        <DisplayItems items={items}></DisplayItems>
      </section>
    </div>
  )
}