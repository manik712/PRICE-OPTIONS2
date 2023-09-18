/* eslint-disable react/prop-types */
import Feature from '../feature/Feature';
import PropTypes from 'prop-types';


const PriceOption = ({option}) => {
  const {name ,price ,features} =option;
  return (
    <div className='bg-red-500 rounded-md p-4 text-indigo-700 flex flex-col'>
        <h2 className='text-center'>
           <span className='text-5xl'>{price}</span>

        </h2 >
        <h4 className='text-2xl text-center'>{name}</h4>
        <div className='pl-6 flex-grow'>
        {
          features.map((feature ,index)  => < Feature feature={feature} key={index} ></Feature>)
        }
        </div>
        <button className='bg-black'>buy now</button>
    </div>
  );
};

PriceOption.PropTypes ={
  option: PropTypes.object
}

export default PriceOption;