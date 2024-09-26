import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart, { plugins } from 'chart.js/auto';
import { CategoryScale } from 'chart.js/auto';

Chart.register(CategoryScale);

import BorderedSection from './BorderedSection';
import Loading from './Loading';
import optionCommands from '@/utility/commands/OptionCommands';
import { Option, HistoricalPrice, OptionDisplayProps } from '@/app/types/optionTypes';

const OptionDisplay: React.FC<OptionDisplayProps> = ({ options }) => {
  const [updatedOptions, setUpdatedOptions] = useState<Option[]>(options);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUpdatedOptions = async () => {
    setLoading(false);
    
    const loadingTimeout = setTimeout(() => {
      setLoading(true);
    }, 500);
  
    try {
      const newOptions = await optionCommands.getOptions();
      
      clearTimeout(loadingTimeout);
  
      setUpdatedOptions(newOptions.props.options);
    } catch (error) {
      console.error('Error fetching updated options:', error);
    } finally {
      setLoading(false);
    }
  };

  const hpChartData = (historicalPrices: HistoricalPrice[]) => {
    let hpDateArr: string[] = [];
    let hpPriceArr: number[] = [];
    historicalPrices.map((price) => {
      hpDateArr.push(""); // Assuming you want to keep the dates empty
      hpPriceArr.push(price.historicalPrice);
    });
    return {
      labels: hpDateArr,
      datasets: [
        {
          data: hpPriceArr,
          borderColor: "#FF0000FF"
        }
      ]
    };
  };

  const hpChartOptions = {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false // Optionally maintain aspect ratio
  };

  useEffect(() => {
    const interval = setInterval(fetchUpdatedOptions, 5000);
    return () => clearInterval(interval);
  }, [updatedOptions]);

  return (
    <div className="flex flex-col basis-11/12 mt-2 space-y-3">
      {updatedOptions.map((option, index) => (
        <div key={index} className="basis-3/12 flex flex-row">
          <div className="basis-2/12"></div>
          <BorderedSection label={option.option.optionName} className="basis-10/12 h-32 p-2">
            <div className="h-full flex flex-row">
              {/* Only update the price here */}
              <div className='pt-2'>Price: <span className='text-red'>${option.option.price}</span></div>
              <div className="flex-grow w-full">
                <Line 
                  data={hpChartData(option.historicalPrices)} 
                  options={hpChartOptions}
                />
              </div>
            </div>
          </BorderedSection>
        </div>
      ))}
      <div>{loading && <Loading label="Loading..." message='Updating Options...'/>}</div>
    </div>
  );  
};

export default OptionDisplay;
