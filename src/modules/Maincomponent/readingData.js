import React, { useEffect, useState } from "react";
import { ResponsiveLine } from '@nivo/line';
import '../../assets/styles/custom.css';
import axios from 'axios';
import moment from 'moment';

// const point={}

const ReadingData = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10 }}
        colors={{ scheme: "accent" }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        // colors={{ scheme: 'purple_blue' }}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableCrosshair={false}
        enableArea={true}
        useMesh={true}
        legends={[]}
    />
)

export default function App() {
    const [data, setData] = useState([])
    // const [read, setRead] = useState({})
    useEffect(() => {
        reading()
        setInterval(() => {
            reading()
        }, 60000);
        }, []);

        function reading(){
            axios
                .get(
                    "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com/read-speed-data"
                )
                .then((result) => {
                    // console.log('result-----', result.data.responseData)
                    // setData(res.data.responseData);
                    var arr = [{
                      id: "Write-graph",
                      // color: "hsl(248, 70%, 50%)",
                      data: []
                  }]
                  var resultData = []
        
                  result.data.responseData.map(items => {
                 
                      resultData.push({
                          x: moment(items.addedOn).format('LT'),
                          y: items.responseTime/items.requestCount
                      })
        
                  })
                  // let graphdata = resultData
                  function getUnique(resultData, index) {
        
                    const unique = resultData
                         .map(e => e[index])
                  
                         // store the keys of the unique objects
                         .map((e, i, final) => final.indexOf(e) === i && i)
                  
                         // eliminate the dead keys & store unique objects
                        .filter(e => resultData[e]).map(e => resultData[e]);      
                  
                     return unique;
                  }
                  
                //   console.log(getUnique(resultData,'x'))
                let graphdata = getUnique(resultData,'x').reverse()
                // console.log('graph----', graphdata)
        
                // To print the value of last object of y.
                // let newData = graphdata.slice(-1)
                // console.log('graph---',newData)
                // let firstData= Object.values(newData[0])
                // console.log('first---',firstData)
                // let secondData = parseFloat(1000/firstData[1])
                // console.log('second---',secondData)
                // setRead(secondData)
               
        
                // console.log('graph--',graphdata)
                arr[0].data = graphdata
                // arr[0].data = resultData
                setData(arr)
        
                })
                .catch((err) => {
                    console.log(err);
                });
        
        } 
        // }, 5000);
   
        // let ex = read
        // console.log('graph---',ex)

    return (
        <div style={{height: 80, margin: '-5px', marginTop: '5px' }}>
            <ReadingData data={data}  />
        </div>
    );
}