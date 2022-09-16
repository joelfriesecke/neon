import { React, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config';
import InventoryItem from './InventoryItem'

function InventoryList() {
/*     const neons = [
        {uid: 'A-njf8934234d', userid: 'firebasecollectionid', nameId: 100, rarityId: 10},
        {uid: 'A-njf8934234d', userid: 'firebasecollectionid', nameId: 201, rarityId: 20},
    ] */
    const [neonList, setneonList] = useState([]);

    useEffect(() => {
        const userCollection = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "neon"));
            querySnapshot.forEach((doc) => {
                setneonList(
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
        userCollection()
    }, []);

    return (
      <div>
        {neonList.map((neon, index) => {
          return <InventoryItem key={index} item={neon} />;
        })}
      </div>
    );
}
export default InventoryList