import React from 'react'

function productDetails() {

    const products = [
        
        { id: 1, 
          name: 'anckle strap heels',
          price: "3000PKR", 
          image: 'https://i.imgur.com/AVKOhRb.jpeg',
          depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
        },
      
        { id: 2,
          name: 'blocked heels',
          price: '3000 PKR',
          image: 'https://i.imgur.com/tkhXXvs.jpeg',
          depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
        },
      
        { id: 3,
          name: 'stiletto heels',
          price: '3000 PKR',
          image: 'https://i.imgur.com/25hxfTy.jpeg',
          depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.', 
        },
        {   id: 4, 
            name: 'sling back heels',
            price: '3000 PKR', 
            image: 'https://i.imgur.com/leBQIq1.jpeg',
            depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
          },
        
          { id: 5,
            name: 'stiletto heels',
            price: '3000 PKR',
            image: 'https://i.imgur.com/lANHPMw.jpeg',
            depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
          },
        
          { id: 6,
            name: 'toe heels',
            price: '3000 PKR',
            image: 'https://i.imgur.com/UT4eD1P.jpeg',
            depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
          },
          
          { id: 7, 
            name: 'bow slingback heel',
            price: '3000PKR', 
            image: 'https://i.imgur.com/tdyIpMp.jpeg',
            depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
          },
        
          { id: 8,
            name: 'chunky heels',
            price: '3000 PKR',
            image: 'https://i.imgur.com/a4yFvPX.jpeg',
            depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
          },
        
          { id: 9,
            name: 'toe heels',
            price: '3000 PKR',
            image: 'https://i.imgur.com/HiYVGFm.jpeg' ,
            depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
          },
          { id: 10, 
            name: 'Anckle strap heel',
            price: '3000PKR', 
            image: 'https://i.imgur.com/rHvpO5X.jpeg',
            depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
          },
        
          { id: 11,
            name: 'toe high heel',
            price: '3000 PKR',
            image: 'https://i.imgur.com/XiYUvXm.jpeg',
            depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
          },
        
          { id: 12,
            name: 'ankle strap heels',
            price: '3000 PKR',
            image: 'https://i.imgur.com/thZlJkP.jpeg',
            depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
          },
          { id: 13, 
            name: 'ankle strap heels',
            price: '3000 PKR', 
            image: 'https://i.imgur.com/oeY1Ah3.jpeg',
            depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
          },
        
          { id: 14,
            name: 'stiletto heels',
            price: '3000 PKR',
            image: 'https://i.imgur.com/WrtkzsW.jpeg',
            depscription: 'A high-quality product designed for comfort and style. Perfect for everyday use, this item combines functionality with elegance, making it a great addition to your collection.',
          },
        //flats
          { id: 15,
            name: 'flat slippers',
            price: '2000 PKR',
            image: 'https://i.imgur.com/UPM4JH5.jpeg',
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.',
          },
          { id: 16, 
            name: 'flat slippers',
            price: '2000PKR' , 
            image: 'https://i.imgur.com/Y4GmvLA.jpeg',
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.',
          },
        
          { id: 17,
            name: 'flat slippers',
            price: 200,
            image: 'https://stylestryproductionwls47sou4z.cdn.e2enetworks.net/images/products/medium/1fed56060d983976e5c26c56136025c33950edaa.webp',
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.',
          },
        
          { id: 18,
            name: 'flat slippers',
            price: '2000 PKR',
            image: 'https://i.imgur.com/FZElGkv.jpeg' ,
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.',
          },

          { id: 19, 
            name: 'flat slider',
            price: '2000 pkr', 
            image: 'https://i.imgur.com/3CqJJWr.jpeg',
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.',
          },
        
          { id: 20,
            name: 'Toe loop sandals',
            price: '2000 PKR',
            image: 'https://i.imgur.com/8sBose9.jpeg',
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.',
          },
        
          { id: 21,
            name: 'flat slider',
            price: '2000 PKR',
            image: 'https://i.imgur.com/F8IoRCr.jpeg',
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.', 
          },
          { id: 22, 
            name: 'flat slider',
            price: '2000 PKR', 
            image: 'https://i.imgur.com/4GpQDbc.jpeg',
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.',
          },
        
          { id: 23,
            name: 'flat slider',
            price: '2000 PKR',
            image: 'https://i.imgur.com/F2dhiSd.png',
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.',
          },
        
          { id: 24,
            name: 'flat slider',
            price: '2200 PKR',
            image: 'https://i.imgur.com/poefSLo.jpeg' ,
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.',
          },
          { id: 25, 
            name: 'kolapuri flat',
            price: '2100 PKR', 
            image: 'https://i.imgur.com/zz8c5AI.jpeg',
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.',
          },
        
          { id: 26,
            name: 'kolapuri flat',
            price: '2100 PKR',
            image: 'https://i.imgur.com/4Chez4D.jpeg',
            depscription: 'With a focus on durability and sophistication, this product is designed to enhance your wardrobe. It provides both style and comfort, making it suitable for various occasions.',
          },
        //shoes
          { id: 27,
            name: 'women causal shoes',
            price: '2000 PKR',
            image: 'https://i.imgur.com/vjcJqVg.jpeg' ,
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          },
          { id: 28, 
            name: 'white trendy sneakers',
            price: '2000 PKR', 
            image: 'https://i.imgur.com/lqTFUnA.jpeg',
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          },
        
          { id: 29,
            name: 'lace-up luxury shoes',
            price: '2000 PKR',
            image: 'https://image.made-in-china.com/226f3j00jwzhbAutSdrn/Fashionable-Lace-up-Women-s-Luxury-Shoes.webp',
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          },
        
          { id: 30,
            name: 'Fashionable slip-on loafer',
            price: '3000 PKR',
            image: 'https://image.made-in-china.com/226f3j00iTobkRrqqtue/Fashionable-Slip-on-Loafers-for-Women-Comfortable-and-Stylish-Footwear.webp',
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          },
          { id: 31, 
            name: 'comfortable casual shoes',
            price: '3000 PKR', 
            image: 'https://image.made-in-china.com/202f0j00wrpkJzDEqQgG/Comfortable-Casual-Shoes-Women-Footwear-for-Ladies-Fashion-Shoe-Flats-Loafer.webp',
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          },
        
          { id: 32,
            name: 'women sneakers',
            price: '3000 PKR',
            image: 'https://i.imgur.com/AKW8sVA.jpeg',
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          },
        
          { id: 33,
            name: 'med-high heel oxford shoes',
            price: '3000 PKR',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/S8385dd9b4cc34cbeaa0688b2be48913cR/2023-Med-High-Heels-Oxford-Shoes-Woman-Lace-Up-Sneakers-Solid-Leather-Brogues-Ladies-All-Match.jpg_640x640Q90.jpg_.webp' , 
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          },
          { id: 34, 
            name: 'leather casual shoes',
            price: '3000 PKR', 
            image: 'https://i.imgur.com/1qnEkHr.jpeg',
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          },
        
          { id: 35,
            name: 'white sneakers',
            price: '3000 PKR',
            image: 'https://i.imgur.com/k7AcQ7S.jpeg',
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          },
        
          { id: 36,
            name: 'black trendy casual shoes',
            price: '3000 PKR',
            image: 'https://i.imgur.com/F9Q5mvA.jpeg' ,
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          },

          { id: 37, 
            name: 'stylish lace-up long shoes',
            price: '3000 PKR', 
            image: 'https://i.imgur.com/ySwNO1O.jpeg',
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          },
        
          { id: 38,
            name: 'stylish lace-up sneakers',
            price: '3000 PKR',
            image: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/o/23/98fe63e1-3011-4eec-8e15-908a5f2ab325.png',
            depscription: 'This product offers the ideal blend of quality and design. Whether for casual outings or special occasions, it ensures that you look and feel great while enjoying long-lasting comfort.',
          }];

  return (
    <></>
  )
}
export default productDetails