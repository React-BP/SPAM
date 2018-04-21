const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/store");

const productSeed = [
      {
         name: 'Syncro Plus 3/2 Back-zip Fullsuit',
         brand: 'Quiksilver',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 199.95,
         quantity: 90,
         gender: 'Male',
         type: ' wetsuits',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/e/q/eqyw103039_32syncrobzlfs_v_xkkk_frt1.jpg'
      },
      {
         name: 'Hypfreak Comp Zipless 3/2 Fullsuit',
         brand: 'O Neill',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 279.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/4/9/4970_a00_f_web.jpg'
      },
      {
         name: 'Womens Flair 3/2 Back-zip Fullsuit',
         brand: 'O Neill',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 279.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Women',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/4/7/4765_a05_f_web_1_2.jpg'
      },
      {
         name: 'Axis 3/2 Fullsuit',
         brand: 'Xcel ',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 164.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Women',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/w/t/wt32ax17-gpb-f_7.jpg'
      },
      {
         name: 'Infiniti 4/3 Fullsuit ',
         brand: 'Xcel',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 334.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Women',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/w/q/wq433z17-bsp-f_1.jpg'
      },
      {
         name: 'Comp X 4/3 Fullsuit',
         brand: 'Xcel',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 359.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/m/n/mn43c2c7-sba-f_1_3.jpg'
      },
      {
         name: 'Original Fuze 4/3 Fullsuit',
         brand: 'O Neill',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 239.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/5/0/5012_a00_f_web.jpg'
      },
      {
         name: 'Psycho 1 Zen Zip 3/2 Fullsuit',
         brand: 'O Neill ',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 339.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/4/9/4964_b82_f_web.jpg'
      },
      {
         name: 'Comp X 3/2 Fullsuit',
         brand: 'Xcel ',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 344.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/m/n/mn32c2c7-blk-b_1.jpg'
      },
      {
         name: 'FLASHBOMB 5/4 HOODED WETSUIT',
         brand: 'Rip Curl',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 469.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2017/10/24/WSU7AF_BLACK_1_surfing_fullsuit_wetsuit-display.jpg'
      },
      {
         name: 'FLASHBOMB PLUS 3/2 ZIP FREE WETSUIT',
         brand: 'Rip Curl',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 429.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2018/01/31/WST7PF_BLACK_11.jpg'
      },
      {
         name: '2/2 Absolute Comp Chest Zip Short Sleeve Springsuit',
         brand: 'Billabong',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 169.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://us.billabong.com/media/filter/xl/img/mwfunbc2_blk_1111.jpg'
      },
      {
         name: 'DAWN PATROL 3/2 BACK ZIP WETSUIT',
         brand: 'Rip Curl',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 159.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2017/10/24/WSM7DM_NAVY_1_surfing_fullsuit_wetsuit-display.jpg'
      },
      {
         name: '2/2 Revolution DBah Shorty Springsuit',
         brand: 'Billabong',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 99.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://us.billabong.com/media/transfer/img/mwspnbrv_blk_111.jpg'
      },
      {
         name: '2/2 Revolution GBS Short Sleeve Chest Zip Springsuit',
         brand: 'Rip Curl',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 139.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://us.billabong.com/media/transfer/img/mwspnbrs_sla_11.jpg'
      },
      {
         name: 'DAWN PATROL 4/3 WETSUIT',
         brand: 'Rip Curl',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 219.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Women',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2017/10/24/WSM7JW_PEACH_1_wetsuit-display.jpg'
      },
      {
         name: 'FLASHBOMB 3/2 WETSUIT',
         brand: 'Rip Curl',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 349.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Women',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2018/01/31/WST7FG_BLACK_111-display.jpg'
      },
      {
         name: 'FLASHBOMB PLUS 4/3 ZIP FREE WETSUIT',
         brand: 'Rip Curl',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 449.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Women',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2018/01/31/WST7QF_BLACK_11.jpg'
      },
      {
         name: 'FLASHBOMB 4/3 HOODED WETSUIT',
         brand: 'Rip Curl',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 459.95,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Male',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2017/10/16/WSU7BF_BLACK_1_surfing_fullsuit_wetsuit.jpg'
      },
      {
         name: 'OMEGA 3/2 FL WETSUIT',
         brand: 'Rip Curl',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10,
            'XXL': 10,
            'LS': 10,
            'MS': 10,
            'MT': 10,
            'LT': 10
         },
         price: 109.99,
         quantity: 90,
         type: ' wetsuits',
         gender: 'Women',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2017/10/24/WSM4KW_BLACK_2-display.jpg'
      },
      {
         name: 'Voodoo Child',
         brand: 'Lost',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 380.00,
         quantity: 40,
         type: 'surfboard',
         image: 'http://lostsurfboards.net/wp-content/uploads/2016/12/voodoo-topbottomrail.jpg'
      },
      {
         name: 'ROUND NOSE FISH REDUX',
         brand: 'Lost',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 360.00,
         quantity: 40,
         type: 'surfboard',
         image: 'http://lostsurfboards.net/wp-content/uploads/2016/07/TOPBOTRAIL.jpg'
      },
      {
         name: 'Psycho Killer',
         brand: 'Lost',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 400.00,
         quantity: 40,
         type: 'surfboard',
         image: 'http://lostsurfboards.net/wp-content/uploads/2018/02/Psycho-killer-Top-Bot-Rail-insta-version-2-1.jpg'
      },
      {
         name: 'Puddle Fish',
         brand: 'Lost',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 420.00,
         quantity: 40,
         type: 'surfboard',
         image: 'http://lostsurfboards.net/wp-content/uploads/2017/02/pf-t-b-r.jpg'
      },
      {
         name: 'Couch Potato',
         brand: 'Lost',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 240.00,
         quantity: 40,
         type: 'surfboard',
         image: 'http://lostsurfboards.net/wp-content/uploads/2013/01/couch-potato-deck-lb-250x675.png'
      },
      {
         name: 'The Flash Back',
         brand: 'Lost',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 310.00,
         quantity: 40,
         type: 'surfboard',
         image: 'http://lostsurfboards.net/wp-content/uploads/2012/05/Flashback.png'
      },
      {
         name: 'The Split Tail R.V.',
         brand: 'Lost',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 325.00,
         quantity: 40,
         type: 'surfboard',
         image: 'http://www.lostsurfboards.net/wp-content/uploads/2015/01/split-tail-rv-surfboard-2015-212x675.png'
      },
      {
         name: 'Puddle Jumper',
         brand: 'Lost',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 385.00,
         quantity: 40,
         type: 'surfboard',
         image: 'http://lostsurfboards.net/wp-content/uploads/2018/03/PJHP-1.jpg'
      },
      {
         name: 'Stealth',
         brand: 'Lost',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 400.00,
         quantity: 40,
         type: 'surfboard',
         image: 'http://lostsurfboards.net/wp-content/uploads/2016/11/V3-Stealth-top-bot-rail2.jpg'
      },
      {
         name: 'Sub Scorcher 2',
         brand: 'Lost',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 315.00,
         quantity: 40,
         type: 'surfboard',
         image: 'http://www.lostsurfboards.net/wp-content/uploads/2015/06/sub-scorcher-2-single-wing-swallow-surfboard-2015-212x675-copy-212x675.jpg'
      },
      {
         name: 'The 1997 RNF Classic',
         brand: 'Lost',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 330.00,
         quantity: 90,
         type: 'surfboard',
         image: 'http://lostsurfboards.net/wp-content/uploads/2012/05/1997RNFclassic1.png'
      },
      {
         name: 'SC Longboard',
         brand: 'South Coast',
         sizes: {
            '10 2': 10,
            '10 8': 10,
            '11 0': 10
         },
         price: 850.00,
         quantity: 30,
         type: 'surfboard',
         image: 'https://static.wixstatic.com/media/328455_dd3474c5d7d3440d820b61b70f94241e~mv2.png/v1/fill/w_525,h_767,al_c,lg_1/328455_dd3474c5d7d3440d820b61b70f94241e~mv2.png'
      },
      {
         name: 'Blackbird Longboard Surfboard Blue Lime Tint',
         brand: 'Modern',
         sizes: {
            '8 0 ': 10
         },
         price: 405.00,
         quantity: 10,
         type: 'surfboard',
         image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_QFreuA46ZL0nqQFtjRSpFkCpu2kLHYQZcgpJxn5cgDMsW3dJoGZQM9EBEc2CbH5xoy95iqr2&usqp=CAY'
      },
      {
         name: 'Retro x 23 1/2 x 31/4 78.5L Longboard Surfboard',
         brand: 'Modern',
         sizes: {
            '9 1': 10
         },
         price: 675.00,
         quantity: 10,
         type: 'surfboard',
         image: 'https://cdn.shopify.com/s/files/1/0003/1902/9309/products/f3dd2eb7b23d0f44579d425b13b36e4d_2000x.jpg?v=1519331449'
      },
      {
         name: 'Mega Magic 2 SLX Longboard ',
         brand: 'Walden ',
         sizes: {
            '7 2': 10
         },
         price: 845.00,
         quantity: 10,
         type: 'surfboard',
         image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRWgz7i025wIqe-bqEZS2uBlSpJAhLvLozu375Xf-mHFdrJTNykEUNBrzC9dUQmvRu9ASaVZz5H&usqp=CAY'
      },
      {
         name: 'Robert August What I Ride',
         brand: 'Surftech ',
         sizes: {
            '9 6': 10
         },
         price: 860.00,
         quantity: 10,
         type: 'surfboard',
         image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgfdwI-A40WHvD12Lkb3AzPVnVFMEMBdHU0ScJOSw1AIeLKR4oizwlpJXk11s&usqp=CAY'
      },
      {
         name: 'Retro PU Longboard Surfboard Blue Tint',
         brand: 'Modern ',
         sizes: {
            '9 1': 10
         },
         price: 675.00,
         quantity: 10,
         type: 'surfboard',
         image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTO1wYU70JFzq7aCcJ1d9k6d-GBVqhkYD8RZk6em8lcY_8Dqw9X1R_Ga47nj2U&usqp=CAY'
      },
      {
         name: 'Retro Green Coke Bottle Tint',
         brand: 'Modern ',
         sizes: {
            '10 10': 10
         },
         price: 875.00,
         quantity: 10,
         type: 'surfboard',
         image: 'https://cdn.shopify.com/s/files/1/0003/1902/9309/products/0862e93140b7d33356094a3f4f672d2c_2000x.jpg?v=1523850427'
      },
      {
         name: 'Rocket 9',
         brand: 'Channel Islands',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 345.00,
         quantity: 40,
         type: 'surfboard',
         image: 'https://www.cisurfboards.com/wp-content/uploads/2016/07/rocket9_Swallow_deck.png'
      },
      {
         name: 'Fever',
         brand: 'Channel Islands',
         sizes: {
            '5 8': 10,
            '5 10': 10,
            '5 9': 10,
            '5 11': 10
         },
         price: 320.00,
         quantity: 40,
         type: 'surfboard',
         image: 'https://www.cisurfboards.com/wp-content/uploads/2017/03/Pat-G-Fever-Deck.png'
      },
 
      {
         name: 'Surf Wax',
         brand: 'Sex Wax',
         sizes: {},
         price: 2.00,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.sexwax.com/thumb.php?file=catalog/items/srwxsw.jpg&sizex=280&sizey=280'
      },
      {
         name: 'ROUTINE TRUCKER',
         brand: 'Rip Curl',
         sizes: {},
         price: 22.95,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2018/03/02/CCAIT7_HEATHER-GREY_1.jpg'
      },
      {
         name: 'FLAMINKO TRUCKER',
         brand: 'Rip Curl',
         sizes: {},
         price: 26.95,
         quantity: 10,
         type: 'accessories',
         image: 'FLAMINKO TRUCKER'
      },
      {
         name: 'THE GAME BY GABRIEL MEDINA SANDALS',
         brand: 'Rip Curl',
         sizes: {},
         price: 50.00,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2018/02/13/TCTCO2_BLACK-GREY_1.jpg'
      },
      {
         name: 'THE TRESTLES SANDALS',
         brand: 'Rip Curl',
         sizes: {},
         price: 60.00,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2018/02/13/TCTBG1_TAN_1.jpg'
      },
      {
         name: 'MAVS SANDALS',
         brand: 'Rip Curl',
         sizes: {},
         price: 28.00,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2017/02/23/TCTGF8_BLACK-RASTA_1.jpg'
      },
      {
         name: 'THE GROOVE SANDALS',
         brand: 'Rip Curl',
         sizes: {},
         price: 30.00,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2017/02/21/TCTFI1_BLACK-RASTA_1.jpg'
      },
      {
         name: 'Dimension Wallet',
         brand: 'Billabong',
         sizes: {},
         price: 24.95,
         quantity: 10,
         type: 'accessories',
         image: 'https://us.billabong.com/media/transfer/img/mawtnbdi_tan_1.jpg'
      },
      {
         name: 'HERO4 Silver Surf',
         brand: 'Go Pro',
         sizes: {},
         price: 399.99,
         quantity: 10,
         type: 'accessories',
         image: 'https://us.billabong.com/media/transfer/img/hero4silver_standardhousing_315_surfboard_floaty_jpg_9227429_master.jpg'
      },
      {
         name: 'Command Backpack',
         brand: 'Billabong',
         sizes: {},
         price: 49.95,
         quantity: 10,
         type: 'accessories',
         image: 'https://us.billabong.com/media/transfer/img/mabklcom_nvy_1.jpg'
      },
      {
         name: 'Platinum X Single Deluxe 6"8  Surfboard Bag',
         brand: 'Billabong',
         sizes: {},
         price: 99.95,
         quantity: 10,
         type: 'accessories',
         image: 'https://us.billabong.com/media/transfer/img/mwdfjs68_blk_1.jpg'
      },
      {
         name: 'CRUISER SNAPBACK',
         brand: 'Rip Curl',
         sizes: {},
         price: 28.95,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2018/03/02/CCALA7_HEATHER-GREY_1.jpg'
      },
      {
         name: ' PC-5 Thruster Fins',
         brand: 'FCS',
         sizes: {},
         price: 85.00,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/p/c/pc-5_pc.jpg'
      },
      {
         name: 'SS Lotion Clear SPF30 3oz',
         brand: 'Headhunter',
         sizes: {},
         price: 12.50,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/h/h/hhclearsunscreen30.jpg'
      },
      {
         name: '2 AM PC Thruster Large',
         brand: 'FCS',
         sizes: {},
         price: 100.00,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/a/m/am_pc_large_2__1.jpg'
      },
      {
         name: 'SS Spray Kids SPF50 6oz',
         brand: 'Headhunter',
         sizes: {},
         price: 16.00,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/h/h/hhkidsspray.jpg'
      },
      {
         name: 'Plate Lunch Pad',
         brand: 'Dakine',
         sizes: {},
         price: 40.00,
         quantity: 10,
         type: 'accessories',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/2/0/2018w-2017s-610934122558-10001097-platelunchxdakinepad-platelunch-main.jpg'
      },
      {
         name: '6 ft Surf Leash',
         brand: 'Beater',
         sizes: {},
         price: 24.95,
         quantity: 10,
         type: 'accessories',
         image: 'https://cdn.shopify.com/s/files/1/1154/7998/products/6_rasta_packaging_1024x1024.jpg?v=1488925057'
      },
      {
         name: '6 ft Surf Leash',
         brand: 'Surfica',
         sizes: {},
         price: 25,
         quantity: 10,
         type: 'accessories',
         image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMi4P8BPX6Sop7kGoVS0A8eBYcm4qzaUZ1JMoKLFCE5KQcYiOOBkiZL2qgRA&usqp=CAY'
      },
      {
         name: 'Launch Traction-White',
         brand: 'Dakine',
         sizes: {},
         price: 34.95,
         quantity: 10,
         type: 'accessories',
         image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGKeT10UjMATnuJqdyxDyBD2BMZzkPekgnBGMlt_mohBiPWa-N84vS2sV5I2SLijbLkSPE2y-0&usqp=CAE'
      },

      {
         name: 'Coastline Long Sleeve Flannel',
         brand: 'Billabong',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10
         },
         price: 59.95,
         quantity: 40,
         type: 'clothing',
         image: 'https://us.billabong.com/media/transfer/img/m522nbco_grh_1.jpg'
      },
      {
         name: 'Access Tank',
         brand: 'Billabong',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10
         },
         price: 21.95,
         quantity: 40,
         type: 'clothing',
         image: 'https://us.billabong.com/media/transfer/img/mt83pbac_dgr_1.jpg'
      },
      {
         name: 'Die Cut Stripe Tee',
         brand: 'Billabong',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10
         },
         price: 26.95,
         quantity: 40,
         type: 'clothing',
         image: 'https://us.billabong.com/media/transfer/img/m431pbds_roc_1.jpg'
      },
      {
         name: 'Fluid Airlite Boardshorts',
         brand: 'Billabong',
         sizes: {
            '28': 10,
            '29': 10,
            '30': 10,
            '32': 10,
            '33': 10,
            '34': 10,
            '36': 10,
            '38': 10
         },
         price: 64.95,
         quantity: 80,
         type: 'clothing',
         image: 'https://us.billabong.com/media/transfer/img/m111nbfl_lim_1.jpg'
      },
      {
         name: 'Fluid Airlite Boardshorts',
         brand: 'Billabong',
         sizes: {
            '28': 10,
            '29': 10,
            '30': 10,
            '32': 10,
            '33': 10,
            '34': 10,
            '36': 10,
            '38': 10
         },
         price: 64.95,
         quantity: 80,
         type: 'clothing',
         image: 'https://us.billabong.com/media/transfer/img/m111nbfl_org_1_2.jpg'
      },
      {
         name: 'Spiral Tee',
         brand: 'Billabong',
         sizes: {
            '28': 10,
            '29': 10,
            '30': 10,
            '32': 10,
            '33': 10,
            '34': 10,
            '36': 10,
            '38': 10
         },
         price: 24.95,
         quantity: 80,
         type: 'clothing',
         image: 'https://us.billabong.com/media/transfer/img/m404pbsr_blk_2.jpg'
      },
      {
         name: 'Momentum X Boardshorts',
         brand: 'Billabong',
         sizes: {
            '28': 10,
            '29': 10,
            '30': 10,
            '32': 10,
            '33': 10,
            '34': 10,
            '36': 10,
            '38': 10
         },
         price: 59.95,
         quantity: 80,
         type: 'clothing',
         image: 'https://us.billabong.com/media/transfer/img/m122nbmo_aqu_1.jpg'
      },
      {
         name: 'Sundays X Cali Boardshorts',
         brand: 'Billabong',
         sizes: {
            '28': 10,
            '29': 10,
            '30': 10,
            '32': 10,
            '33': 10,
            '34': 10,
            '36': 10,
            '38': 10
         },
         price: 59.95,
         quantity: 80,
         type: 'clothing',
         image: 'https://us.billabong.com/media/transfer/img/m123pbca_aqu_1.jpg'
      },
      {
         name: 'Die Cut Stripe Tank',
         brand: 'Billabong',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10
         },
         price: 26.95,
         quantity: 40,
         type: 'clothing',
         image: 'https://us.billabong.com/media/transfer/img/m900nbdt_doz_1.jpg'
      },
      {
         name: 'Sundays Airlite Boardshorts',
         brand: 'Billabong',
         sizes: ['28', '29', '30', '32', '33', '34', '36', '38'],
         price: 59.95,
         quantity: 10,
         type: 'clothing',
         image: 'https://us.billabong.com/media/transfer/img/m102nbsu_blk_1.jpg'
      },
      {
         name: 'Cali Bear Tee White',
         brand: 'Billabong',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10
         },
         price: 24.95,
         quantity: 40,
         type: 'clothing',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/m/4/m404nbcb_wht_1.jpg'
      },
      {
         name: 'Large Mouth Tee Black',
         brand: 'Salty Crew ',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10
         },
         price: 25.00,
         quantity: 40,
         type: 'clothing',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/2/0/20035037_largemouth_tee_black_back_1024x1024.png'
      },
      {
         name: 'Topwater Tee Graphite',
         brand: 'Salty Crew',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10
         },
         price: 25.00,
         quantity: 40,
         type: 'clothing',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/2/0/20035055_topwater_tee_graphite_heather_back_1024x1024.png'
      },
      {
         name: 'Freemont Flannel ',
         brand: 'Billabong',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10
         },
         price: 54.95,
         quantity: 40,
         type: 'clothing',
         image: 'https://us.billabong.com/media/transfer/img/m505mfre_olv_1.jpg'
      },
      {
         name: 'Rotor Tee Olive',
         brand: 'Billabong',
         sizes: {
            'S': 10,
            'M': 10,
            'L': 10,
            'XL': 10
         },
         price: 21.95,
         quantity: 40,
         type: 'clothing',
         image: 'https://www.southcoast.com/pub/media/catalog/product/cache/image/1250x1000/af097278c5db4767b0fe9bb92fe21690/m/4/m401nbro_olv_2.jpg'
      },
      {
         name: 'VIBES WALKSHORTS',
         brand: 'Rip Curl',
         sizes: {
            '28': 10,
            '29': 10,
            '30': 10,
            '32': 10,
            '33': 10,
            '34': 10,
            '36': 10,
            '38': 10
         },
         price: 49.95,
         quantity: 80,
         type: 'clothing',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2018/03/02/CWAAS7_GREEN_1.jpg'
      },
      {
         name: 'CHAVEZ WALKSHORTS',
         brand: 'Rip Curl',
         sizes: {
            '28': 10,
            '29': 10,
            '30': 10,
            '32': 10,
            '33': 10,
            '34': 10,
            '36': 10,
            '38': 10
         },
         price: 49.95,
         quantity: 80,
         type: 'clothing',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2018/03/02/CWABA7_BLACK_1.jpg'
      },
      {
         name: 'AFTERHOURS WALKSHORTS',
         brand: 'Rip Curl',
         sizes: {
            '28': 10,
            '29': 10,
            '30': 10,
            '32': 10,
            '33': 10,
            '34': 10,
            '36': 10,
            '38': 10
         },
         price: 39.95,
         quantity: 80,
         type: 'clothing',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2017/11/27/CWAAT7_CHARCOAL-GREY_1-display.jpg'
      },
      {
         name: 'EPIC PANT',
         brand: 'Rip Curl',
         sizes: {
            '28': 10,
            '29': 10,
            '30': 10,
            '32': 10,
            '33': 10,
            '34': 10,
            '36': 10,
            '38': 10
         },
         price: 59.50,
         quantity: 80,
         type: 'clothing',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2017/10/24/CPAAE7_LIGHT-BROWN_1-display.jpg'
      },
      {
         name: 'DAZE PANT',
         brand: 'Rip Curl',
         sizes: {
            '28': 10,
            '29': 10,
            '30': 10,
            '32': 10,
            '33': 10,
            '34': 10,
            '36': 10,
            '38': 10
         },
         price: 49.50,
         quantity: 80,
         type: 'clothing',
         image: 'https://www.ripcurl.com/ripcurl/media/products/2017/10/24/CPAAL7_GREEN_1-display.jpg'
      }
];

db.Item
   .remove({})
   .then(() => db.Item.collection.insertMany(productSeed))
   .then(data => {
      console.log(data.insertedIds.length + 'records inserted!');
      process.exit(0);
   })
   .catch(err => {
      console.log(err);
      process.exit(1);
   });