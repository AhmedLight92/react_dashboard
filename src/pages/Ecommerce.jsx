import React from 'react'

import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const Ecommerce = () => {
  const { currentColor} = useStateContext() ; 
  return (
    <div className='mt-12 '>

  <div className="flex flex-wrap justify-center lg:flex-nowrap">
    <div className='w-full p-8 m-3 bg-white bg-center bg-no-repeat bg-cover dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 pt-9 bg-hero-pattern'>
  <div className='flex items-center justify-between'>
    <div>
      <p className='font-bold text-gray-400'>Earnings</p>
      <p className='text-2xl'>$50,200.00</p>
    </div>
  </div>

    <div className='mt-6'> 
     <Button color="white" bgColor={ currentColor} text="Download" borderRadius="10px" size="md" />
    </div>
    </div>


    <div className='flex flex-wrap items-center justify-center gap-1 m-3'>
      {
        earningData.map((item)=> 
           (
             <div
             key={item.title}
             className='p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pt-9 rounded-2xl '
             >
               <button type='button' style={{
                 color:item.iconColor , 
                 backgroundColor:item.iconBg
               }}
               className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
               >
        {item.icon}
               </button>
               <p className='mt-3'>

                 <span className='text-lg font-semibold'> {item.amount}</span>
                 <span className={`text-sm text-${item.pcColor} ml-2`}> {item.percentage}</span>
               </p>
               <p className='mt-1 text-sm text-gray-400'>
                 {item.title}
               </p>
             </div>
           )
        )
      }
    </div>
  </div>
    <div className='flex flex-wrap justify-center gap-10'>
      <div className='p-4 m-3 bg-white rounded-d-2xl dark:text-gray-200 dark:bg-secondary-dark-bg md:w-780'>
       <div className='flex justify-between'>
       <p
       className='text-2xl font-semibold '
       >Revenue Updates</p>
       <div className='flex items-center gap-4 '>
        <p className="flex items-center gap-2 text-gray-400 hover:drop-shadow-xl">
        <span>
        <GoPrimitiveDot />  
           </span>
           <span>Expense</span>

        </p>
       
        <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
        <span>
        <GoPrimitiveDot />  
           </span>
           <span>Budget</span>

        </p>
       </div>
       </div>

        <div className='flex flex-wrap justify-center gap-10 mt-10'>
        <div className="pr-10 m-4 border-r-1 border-color">
        <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>

              <div className="mt-8">
                <p className="text-3xl font-semibold">$40,487</p>

                <p className="mt-1 text-gray-500">Expense</p>
              </div>
              <div className='mt-5 '>
              <SparkLine currentColor={ currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={ currentColor} />


              </div>

              <div className='mt-10'>
                <Button color="white" bgColor={ currentColor}
                text="Download Report"
                borderRadius = "10px"
                />

              </div>
        
        </div>

        <div>
        <Stacked  width="320px" height="360px" />

        </div>
          
        </div>

      </div>
    </div>
  </div>
  )
}

export default Ecommerce