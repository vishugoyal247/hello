import React from 'react'
import Products from './Products'

export default function ProductList() {


    const AllData = [
        {
            title: "Black Tshirt",
            price: "15",
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Flaprintanddesign.com%2Fwp-content%2Fuploads%2F2019%2F08%2FBlack-t-shirt-for-men-Gildan-Hammer-H000.jpg%3Fssl%3D1&f=1&nofb=1&ipt=59ea8ef94d8e3b3c54e99282860893a166755419ba0f24acc3ff78ac075571dd&ipo=images",
            category: "T-Shirt"

        },
        {
            title: "Blue Tshirt",
            price: "20",
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aKe6sYJrxwTL9HjzCGuWIgHaHa%26pid%3DApi%26h%3D160&f=1&ipt=592d1044faa8fcf6066f9983dab5792b526c41eca9beb19125f27bd3fca62153&ipo=images",
            category: "T-Shirt"
        },
        {
            title: "Green Tshirt",
            price: "25",
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.xtees.com%2Fuploads%2Fproducts%2Fimages%2Fprimary%2Fbottle-green-plain-round-neck-t-shirt_1611589901.jpg&f=1&nofb=1&ipt=de7fe4397675c0fd13d09a6a9cb10d45ef5cf70d4461621fcf24398d41802d2f&ipo=images",
            category: "T-Shirt"
        },
        {
            title: "White Tshirt",
            price: "30",
            imgUrl: "https://img.freepik.com/free-psd/isolated-black-t-shirt-front_125540-1167.jpg?w=740&t=st=1665566593~exp=1665567193~hmac=7327f85742251a8ff1b6e5bc0c5ec46d762149839d8773f33c60f8cf84696ed4",
            category: "T-Shirt"
        },
    ]



    return (
        <>
            <div className='bg-[#0F1111] h-16 py-4 px-20 font-bold text-white' >
                AMAZON
            </div>

            <Products className='flex' product={AllData} />  
        </>

    )
}
