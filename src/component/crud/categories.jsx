import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Catigories = () => {

    return (
        <div className='my-16 w-[97%] mx-auto'>
            <Tabs>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>On-Site</Tab>
                        <Tab>Remote</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part-time</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}
export default Catigories