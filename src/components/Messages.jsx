import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';

import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/appSlice';
import { db } from '../firebase';

const Messages = () => {
   const dispatch = useDispatch();

   const {searchText, emails} = useSelector(store=>store.appSlice);
   const [filterEmail, setFilterEmail] = useState(emails);


  useEffect(()=>{
    const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'));
   const unsubscribe = onSnapshot(q,(snapshot)=>{
    const allEmails = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
    
    dispatch(setEmails(allEmails));
    

   })



   return ()=>unsubscribe();
  },[]);

  useEffect(() => {
    const filteredEmail = emails?.filter((email) => {
      return email.subject.toLowerCase().includes(searchText.toLowerCase()) || email.to.toLowerCase().includes(searchText.toLowerCase()) || email.message.toLowerCase().includes(searchText.toLowerCase())
    });
    setFilterEmail(filteredEmail);
  }, [searchText, emails]);

  return (
    <div>
    {
  filterEmail?.map((email) => <Message key={email.id} email={email} />)
    }
    
     
    </div>
  )
}

export default Messages