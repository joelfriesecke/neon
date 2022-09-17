import { React, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config';
import InventoryItem from './InventoryItem'

function InventoryList() {

    const [neonList, setNeonList] = useState([]);

    useEffect(() => {
        const neonCollection = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "generatedNeons"));
            querySnapshot.forEach((doc) => {
                setNeonList(
                  querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                  }))
                );
            });
        } catch (error) {
            console.log(error);
        }
        }
        neonCollection()
    }, []);
    //console.log(neonList)
    return (
      <div>
        {neonList.map((neon, index) => {
          return <InventoryItem key={index} item={neon} />;
        })}
      </div>
    );
}
export default InventoryList