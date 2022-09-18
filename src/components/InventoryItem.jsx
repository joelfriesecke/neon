import { React, useEffect, useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase-config';
import { useSelector } from "react-redux";

export const InventoryItem = () => {
    const inventoryItems = useSelector(state => state.inventoryItems);

    const renderedInventoryItem = inventoryItems.map(item => (
        <p key={item.id}>{ item.name } {item.probability}</p>
    ));

    return (
        <div>
            {renderedInventoryItem}
        </div>
    )
}

export default InventoryItem
