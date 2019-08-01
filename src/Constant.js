const risks = {
  
    datasets: [
      {
        data: [40,47,13],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8B008B',
          '#008B8B',
          '#4682B4',
          
  
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        
      }],
      labels: ["MediumRisk","LowRisk","HighRisk","CriticalRisk"],
  };

  export  const plans = {
  
    datasets: [
      {
        data: [57.6,32.9,7.6],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8B008B',
          '#008B8B',
          '#4682B4',
          
  
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        
      }],
      labels: ["TBD","Implemented","Planned","Deferred"],
  };

  export  const vulnerabilities = {
  
    datasets: [
      {
        label:'Top 5 Vulnerablities',
        data: [28,44,33,67,25],
        backgroundColor: [
          
          '#FFCE56',
          '#FFCE56',
          '#FFCE56',
          '#FFCE56',
          '#FFCE56',
          '#FFCE56',
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
            '#FFCE56',
        ],
        
      }],
      labels: ["Encryption Vulnerabilities","Excessive User Permissions","Dormant Accounts","Physical Securities","Other Trusting Employees"],
  };
  export  const entities = {
  
    datasets: [
      {
          label:'Top 5 Entities',
        data: [66,19,18,16,17],
        backgroundColor: [
          'red',
          'red',
          'red',
          'red',
          'red',
          'red'
          
  
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'red'
        ],
        
      }],
      labels: ["General Hospital","Internal Medical East","Asheville Vascular Care","Regional Medical Center","Internal Medicine - Davidson"],
  };

export const riskHeatMap={
xLabels : ["Rare","Unlikely","Moderate","Likely","Almost Certain"],
 yLabels : ["Insignifican","Minor","Moderate","Major","Severe"],

 data :[[200,404,106,102,20],[140,207,101,90,80],[50,108,150,160,104],[60,40,50,50,3],[40,50,40,2,3]]
}

  export default risks