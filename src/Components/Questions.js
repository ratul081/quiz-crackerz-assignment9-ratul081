import React, {useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Eye, EyeOff } from 'heroicons-react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { addToDb } from '../utilities/fakedb';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 9,
}


const Questions = ({ questions,topicName }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showAnswer, setShowAnswer] = useState(true)
  const { options, id, question, correctAnswer } = questions;
  const slicedQuestion = question.slice(3, -4)
  const handleAnswer = (selectedOption) => {
    if (selectedOption === correctAnswer) {
      toast.success('Nice. You got the Answer!!!', { autoClose: 400 })
      addToDb(`${topicName}`)
    }
    else {
      toast.warning('So Sad. You are wrong!!!', { autoClose: 400 })
    }
  }
  // console.log(topicName);
  return (
    <div className='bg-orange-300 mx-4 md:mx-10 lg:mx-60 my-7 py-6 rounded-lg relative'>
      <div onClick={() => {
        setShowAnswer(!showAnswer)
      }} className='h-1 w-1 text-black absolute right-0 top-0 mx-8 my-3 correct-icon' >
        <button onClick={handleOpen}>{showAnswer ? <Eye /> : <EyeOff />}</button>
      </div>
      <p className='mb-4 p-6 text-center text-2xl'>{slicedQuestion}</p>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" 
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h3 className="text-2xl font-bold">You should have google it user.</h3>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="py-4 text-xl">The correct answer is :- <span className='font-semibold'> {correctAnswer} </span>.</p>
          </Typography>
        </Box>
      </Modal>
      {/* modal end */}
      <div className='grid lg:grid-cols-2 gap-3 p-6 text-xl'>
        {
          options.map((option, idx) =>
            <div key={idx} className='mx-10 cursor-pointer'>
              <div className='flex' onClick={async() => handleAnswer(option)}>
                <input id={id} className='mx-3 w-6' type="radio" value={option} name={`${options}`} />
                {option}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Questions;