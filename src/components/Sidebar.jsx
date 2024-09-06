import React from 'react'
import { IoMdStar } from 'react-icons/io'
import { LuPencil } from 'react-icons/lu'
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { setOpen } from '../redux/appSlice'


const sidebarItem=[
    {
        icon:<LuPencil size={"20px"}/>,
        text:"Inbox"
    },
    {
        icon:<IoMdStar size={"20px"}/>,
        text:"Starred"
    },{
        icon:<MdOutlineWatchLater size={"20px"}/>,
        text:"Shnoozed"
    },
    {
        icon:<TbSend2   size={"20px"}/>,
        text:"Sent"
    },
    {
        icon:<MdOutlineDrafts  size={"20px"}/>,
        text:"Drafts"
    },
    {
        icon:<MdOutlineKeyboardArrowDown  size={"20px"}/>,
        text:"More"
    },
    
    
]

const Sidebar = () => {
  //  const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    
  return (
    <div className='w-[15%]'>
        <div className='p-3'>
            <button onClick={()=>  dispatch(setOpen(true)) } className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md  bg-[#C2E7FF]'>
                <LuPencil size={"20px"}/>
                Compose
            </button>
            <div className='text-gray-500'>
                {
                    sidebarItem.map((item, index)=>{
                        return(
                            <div className='flex items-center gap-4 pl-6 py-1 my-2 rounded-full hover:cursor-pointer hover:bg-gray-200'>

               {item.icon}
                    <p>{item.text}</p>
                </div>

                        )
                    })
                }
                

            </div>

        </div>
      
    </div>
  )
}

export default Sidebar