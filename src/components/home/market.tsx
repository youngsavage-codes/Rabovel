import React from 'react';

const Market = () => {
  const marketData = [
    {
      id: 1,
      name: 'Bitcoin',
      image: '/coins/00.png',
      price: '0.6700 USD',
      change: '-5.43%',
      marketCap: '$93,967,200.89',
      supply: '21M',
      volume: '$46,967.30',
      changeDirection: 'Down', // can be 'Up' or 'Down'
    },
    {
      id: 2,
      name: 'Ethereum',
      image: '/coins/icon7.png',
      price: '0.6700 USD',
      change: '0.23%',
      marketCap: '$560,450.89',
      supply: '0.5K',
      volume: '$580.989',
      changeDirection: 'Up',
    },
    {
      id: 3,
      name: 'Telher',
      image: '/coins/02.png',
      price: '0.6700 USD',
      change: '-5.43%',
      marketCap: '$64,68900.23',
      supply: '36M',
      volume: '$46,967.30',
      changeDirection: 'Down',
    },
    {
      id: 4,
      name: 'Bitcoin',
      image: '/coins/03.png',
      price: '0.6700 USD',
      change: '-5.43%',
      marketCap: '$93,967,200.89',
      supply: '33k',
      volume: '$46,967.30',
      changeDirection: 'Down',
    },
    {
      id: 5,
      name: 'Bitcoin',
      image: '/coins/04.png',
      price: '0.6700 USD',
      change: '3.67%',
      marketCap: '$93,967,200.89',
      supply: '100k',
      volume: '$46,967.30',
      changeDirection: 'Up',
    }
  ];

  return (
    <div className="">
      <div className="mx-auto">
        
        <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-700 mb-8">
          <div className='text-[20px] text-white'>Currency</div>
          <div className='text-[20px] text-white hidden lg:block'>24H Change</div>
          <div className='text-[20px] text-whit text-white hidden lg:block'>Market Cap</div>
          <div className='text-[20px] text-white hidden lg:block'>T Supply</div>
          <div className='text-[20px] text-white hidden lg:block'>24H Volume</div>
        </div>

        {marketData.map((item) => (
          <div key={item.id} className="grid lg:grid-cols-5 gap-4 bg-[#101227] p-5 mb-6 rounded-lg shadow-md items-center w-full">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
              <div className=''>
                <h2 className="font-semibold text-[20px]">{item.name}</h2>
                <p className="text-xs lg:text-sm text-gray-500 flex items-center wfull"><span className="text-white">PRICE</span> = {item.price}</p>
              </div>
            </div>
            <div className="lg:flex items-center hidden">
              <img
                className="w-4 h-4 mr-2 object-contain"
                src={`/coins/${item.changeDirection === 'Up' ? 'up' : 'down'}.png`}
                alt="change icon"
              />
              <span className={item.changeDirection === 'Up' ? 'text-green-500 text-[16px]' : 'text-red-500 text-[16px]'}>{item.change}</span>
            </div>
            <div className="text-white text-[16px] hidden lg:block">{item.marketCap}</div>
            <div className="text-white text-[16px] hidden lg:block">{item.supply}</div>
            <div className="text-white text-[16px] hidden lg:block">{item.volume}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
