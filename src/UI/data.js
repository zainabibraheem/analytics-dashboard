import totalOrder from '../assets/box-tick.png';
import totalRefund from '../assets/3d-rotate.png';
import averageSales from '../assets/shopping-cart.png';
import totalIncome from '../assets/coin.png';

import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';

export const trendsData = [
  {
    id: 1,
    title: 'Total Order',
    value : 350,
    icon: <img src={totalOrder} alt='box tick'/>
  },

  {
    id: 2,
    title: 'Total refund',
    value : 270,
    icon: <img src={totalRefund} alt='3d rotate'/>
  },

  {
    id: 3,
    title: 'Average Sales',
    value : 1567,
    icon: <img src={averageSales} alt='shopping cart'/>
  },

  {
    id: 4,
    title: 'Total Income',
    value : '350.000',
    icon: <img src={totalIncome} alt='coin'/>
  }
]



export const platformData = [
  {
    id: 1,
    title: 'Book Bazaar',
    price: '2,500,000',
    percentage: '50%',
    color: '#6160DC',
    value: 15,

  },

  {
    id: 2,
    title: 'Artisan Aisle',
    price: '1,800,000',
    percentage: '40%',
    color: '#54C5EB',
    value: 10,
  },

  {
    id: 3,
    title: 'Toy Troop',
    price: '1,200,000',
    percentage: '20%',
    color: '#FFB74A',
    value: 8,
  },

  {
    id: 1,
    title: 'XStore',
    price: '1,500,000',
    percentage: '18%',
    color: '#FF4A55',
    value: 6,
  }
]
   
 export const ordersData = [
  {
    id: 1,
    image: <img src= {pic1}/>,
    name: 'Marcus Bergson',
    price: '80,000',
    status: 'paid',
  },

  {
    id: 2,
    image: <img src= {pic2}/>,
    name: 'Jaydon Vaccaro',
    price: '150,000',
    status: 'refund',
    
  },

  {
    id: 3,
    image: <img src= {pic3}/>,
    name: 'Corey Schleifer',
    price: '87,000',
    status: 'paid',
  },


  
  {
    id: 4,
    image: <img src= {pic4}/>,
    name: 'Cooper Press',
    price: '100,000',
    status: 'refund',
  },

  
  {
    id: 5,
    image: <img src= {pic5}/>,
    name: 'Phillip Ludin',
    price: '78,000',
    status: 'paid',
  },

]

export const chartData = [
  
  { id: 1,
    label: 'jan',
    value: 6500,
  },

  {
    id: 2,
    label: 'feb',
    value: 21000,
  },

  {
    id: 3,
    label: 'mar',
    value: 2700,
  },

  {
    id: 4,
    label: 'apr',
    value: 28000,
  },

  {
    id: 5,
    label: 'may',
    value: 9000,
  },

  {
    id: 6,
    label: 'jun',
    value: 45000,
  },

  {
    id: 7,
    label: 'jul',
    value: 9000,
  },

  {
    id: 8,
    label: 'aug',
    value: 23000,
  },

  { 
    id: 9,
    label: 'sep',
    value: 32000,
  },

  {
    id: 10,
    label: 'oct',
    value: 4000,
  },

  {
    id: 11,
    label: 'nov',
    value: 30000,
  },

  {
    id: 12,
    label: 'dec',
    value: 26000,
  }
] 

