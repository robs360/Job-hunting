
import { date } from 'date-fn';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Catigories = () => {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setInfo(data)
            });
    })
    console.log(info)
    return (
        <div className='w-full'>
            {
                loading ? (<p className='text-center mt-10'>loading.....</p>) :
                    (<div className='my-16 w-[97%] mx-auto'>
                        <Tabs>
                            <div className='flex items-center justify-center my-10'>
                                <TabList>
                                    <Tab><h1 className='font-semibold'>On-Site</h1></Tab>
                                    <Tab><h1 className='font-semibold'>Remote</h1></Tab>
                                    <Tab><h1 className='font-semibold'>Hybrid</h1></Tab>
                                    <Tab><h1 className='font-semibold'>Part-time</h1></Tab>
                                </TabList>
                            </div>

                            <TabPanel>
                                <div className='w-full grid grid-cols-1 md:grid-cols-2
                            lg:grid-cols-3'>
                                    {
                                        info.filter(data => data.catigory === 'Onsite').map(item => <div className='w-[325px]
                                        shadow-xl rounded-md p-2 mx-auto'>
                                            <img src={item.photo}
                                                className='w-full h-[260px] rounded-md'
                                                alt="" srcset="" />
                                            <div className='mt-4 w-full border-t-2
                                              border-gray-400'>
                                                <div className='my-2 flex justify-between border-b-2 border-gray-400'>
                                                    <h1 className='text-[16px]
                                                    font-bold'>Name:{item.name}</h1>
                                                    <h1 className='text-[16px]
                                                    font-bold'>Salary:{item.salary}Tk</h1>
                                                </div>
                                                <div className='my-2 border-b-2 border-gray-400'>
                                                    <h1 className='text-[16px]
                                                    font-bold'>Last date:{item.date}</h1>

                                                </div>
                                                <div className='my-2 flex justify-between
                                                 border-b-2 border-gray-400'>
                                                    <h1>post Date:{item.post}</h1>
                                                    <h1>Aplicant:{item.applicant}</h1>

                                                </div>
                                               <Link to={`details/${item._id}`}>
                                                  <button className='w-full h-[36px] rounded-md
                                                  bg-black text-white
                                                   text-xl font-semibold'>View Details</button>
                                               </Link>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </TabPanel>
                            <div>
                                <TabPanel>
                                    <div className='w-full grid grid-cols-1 md:grid-cols-2
                            lg:grid-cols-3'>
                                        {
                                            info.filter(data => data.catigory === 'Remote').map(item => <div  className='w-[325px]
                                        shadow-xl rounded-md p-2 mx-auto'>
                                                <img  src={item.photo}
                                                    className='w-full h-[260px] rounded-md'
                                                    alt="" srcset="" />
                                                <div className='mt-4 w-full border-t-2
                                              border-gray-400'>
                                                    <div className='my-2 flex justify-between border-b-2 border-gray-400'>
                                                        <h1 className='text-[16px]
                                                    font-bold'>Name:{item.name}</h1>
                                                        <h1 className='text-[16px]
                                                    font-bold'>Salary:{item.salary}Tk</h1>
                                                    </div>
                                                    <div className='my-2 border-b-2 border-gray-400'>
                                                        <h1 className='text-[16px]
                                                    font-bold'>Last date:{item.date}</h1>

                                                    </div>
                                                    <div className='my-2 flex justify-between
                                                 border-b-2 border-gray-400'>
                                                        <h1>post Date:{item.post}</h1>
                                                        <h1>Aplicant:{item.applicant}</h1>

                                                    </div>
                                                    <Link to={`details/${item._id}`}>
                                                  <button className='w-full h-[36px] rounded-md
                                                  bg-black text-white
                                                   text-xl font-semibold'>View Details</button>
                                               </Link>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </TabPanel>
                            </div>
                            <div>
                                <TabPanel>
                                <div className='w-full grid grid-cols-1 md:grid-cols-2
                            lg:grid-cols-3'>
                                    {
                                        info.filter(data=>data.catigory==='Hybrid').map(item => <div className='w-[325px]
                                        shadow-xl rounded-md p-2 mx-auto'>
                                            <img src={item.photo}
                                                className='w-full h-[260px] rounded-md'
                                                alt="" srcset="" />
                                            <div className='mt-4 w-full border-t-2
                                              border-gray-400'>
                                                <div className='my-2 flex justify-between border-b-2 border-gray-400'>
                                                    <h1 className='text-[17px]
                                                    font-bold'>Name:{item.name}</h1>
                                                    <h1 className='text-[17px]
                                                    font-bold'>Salary:{item.salary}Tk</h1>
                                                </div>
                                                <div className='my-2 border-b-2 border-gray-400'>
                                                    <h1 className='text-[17px]
                                                    font-bold'>Last date:{item.date}</h1>

                                                </div>
                                                <div className='my-2 flex justify-between
                                                 border-b-2 border-gray-400'>
                                                    <h1>post Date:{item.post}</h1>
                                                    <h1>Aplicant:{item.applicant}</h1>

                                                </div>
                                                <Link to={`details/${item._id}`}>
                                                  <button className='w-full h-[36px] rounded-md
                                                  bg-black text-white
                                                   text-xl font-semibold'>View Details</button>
                                               </Link>
                                            </div>
                                        </div>)
                                    }
                                </div>
                                </TabPanel>
                            </div>
                            <div>
                                <TabPanel>
                                <div className='w-full grid grid-cols-1 md:grid-cols-2
                            lg:grid-cols-3'>
                                    {
                                        info.filter(data=>data.catigory==='Part-time').map(item => <div  className='w-[325px]
                                        shadow-xl rounded-md p-2 mx-auto'>
                                            <img src={item.photo}
                                                className='w-full h-[260px] rounded-md'
                                                alt="" srcset="" />
                                            <div className='mt-4 w-full border-t-2
                                              border-gray-400'>
                                                <div className='my-2 flex justify-between border-b-2 border-gray-400'>
                                                    <h1 className='text-[17px]
                                                    font-semibold'>Name:{item.name}</h1>
                                                    <h1 className='text-[17px]
                                                    font-semibold'>Salary:{item.salary}Tk</h1>
                                                </div>
                                                <div className='my-2 border-b-2 border-gray-400'>
                                                    <h1 className='text-[17px]
                                                    font-semibold'>Last date:{item.date}</h1>

                                                </div>
                                                <div className='my-2 flex justify-between
                                                 border-b-2 border-gray-400'>
                                                    <h1>post Date:{item.post}</h1>
                                                    <h1>Aplicant:{item.applicant}</h1>

                                                </div>
                                                <Link to={`details/${item._id}`}>
                                                  <button className='w-full h-[36px] rounded-md
                                                  bg-black text-white
                                                   text-xl font-semibold'>View Details</button>
                                               </Link>
                                            </div>
                                        </div>)
                                    }
                                </div>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>)
            }
        </div>
    )
}
export default Catigories