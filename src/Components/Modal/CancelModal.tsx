import { Button , Input  } from '@material-tailwind/react';
import { useState } from 'react';

function CancelModal({handleCloseModal , handleCancleTrip}) {
  const [reason , setReason] = useState('');
  const [selectedOption , setSelectedOption] = useState('Long waiting time')

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-20'>
      <div className='bg-white p-10 rounded-lg shadow-lg flex flex-col gap-2'>
            {/* <h1 className="text-2xl">Reason</h1> */}
            <div className='flex flex-col gap-3'>
                <div className="flex gap-2">
                    <input 
                    type="radio"
                    name="radio-1"
                    className="radio"
                    checked={selectedOption === 'Long waiting time'}
                    onClick={()=>setSelectedOption('Long waiting time')}
                    />
                    <h1>Long waiting time</h1>
                </div>
                <div className='flex gap-2'>
                    <input 
                    type="radio"
                    name="radio-1" 
                    className="radio"
                    checked={selectedOption === 'Driver not responding'}
                    onClick={()=>setSelectedOption('Driver not responding')}
                    />

                    <h1>Driver not responding</h1>
                </div>
            </div>

            <Input value={reason} onChange={((e)=>setReason(e.target.value))} className='h-[10vh]' label="Reason for cancelling the ride" />

            <div className='md:mt-5'>
                <Button className='m-2' color='red' onClick={handleCloseModal}>Close</Button>
                <Button className='m-2' color='green' onClick={()=>handleCancleTrip(reason,selectedOption)}>Continue</Button>
            </div>
      </div>
    </div>
  );
}

export default CancelModal;
