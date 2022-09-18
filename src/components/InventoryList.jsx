import { React, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config';
import { InventoryItem } from './InventoryItem'

function InventoryList() {
    return (
      <div>
        <InventoryItem />
      </div>
    );
}
export default InventoryList