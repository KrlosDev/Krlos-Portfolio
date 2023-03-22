import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import { slideIn } from '../utils/motion';
import { Alert} from '@mui/material';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'', email:'', message:''
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_k3ffn1i',
      'template_c8zg19q',
      {
        from_name: form.name,
        to_name: 'Carlos',
        from_email: form.email,
        to_email:'carlosb@bbhint.com',
        message: form.message,
      },
      'xmKjv0sbEHMt9aLCN'
    )
    .then(()=>{
      setLoading(false);
      setForm({name:'', email:'', message:''})
      setOpen(true)
      
      
    },(error)=>{
      setLoading(false)
      console.log(error)
      
    })
  }

  return (
    <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'><span className='text-white font-medium mb-4'>Your Name</span>
            <input
              required={true}
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium' />
          </label>

          <label className='flex flex-col'><span className='text-white font-medium mb-4'>Your E-mail</span>
            <input
              required={true}
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your e-mail?"
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium' />
          </label>

          <label className='flex flex-col'><span className='text-white font-medium mb-4'>Message</span>
            <textarea
              required={true}
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium' />
          </label>
          <button type='submit' className='bg-emerald-700 py-3 px-8 outline-none w-fit mx-auto text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-emerald-900'>
            {loading ? 'Sending...' : 'Send'}
          </button>
          


        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    <div>{open ? <Alert onClose={() => { setOpen(false); } }>Thank you. I'll contact you as soon as possible.</Alert> : ''}</div>
    </>
  )
}

export default SectionWrapper(Contact, "contact")