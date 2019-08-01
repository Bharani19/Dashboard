import React, { Component } from 'react';
import  { Button, Card, CardBody, Row, Col,
       }  from "reactstrap"
import risks, { plans, vulnerabilities, entities, riskHeatMap } from "./../Constant"
import 'chartjs-plugin-datalabels';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import HeatMap from "react-heatmap-grid"
import { Bar, Doughnut, HorizontalBar, Pie, Polar, Radar } from 'react-chartjs-2';
import './../App.css';

console.log("risks ", risks)
const options = {
    tooltips: {
        enabled: true,
        //custom: CustomTooltips
    },
    showTooltips: true,
    plugins: {
        datalabels: {
            display: true,
            color: '#000000',
            font: {
                size: 11,
                weight: 600, float: "right"

            },

        }
    },
    legend: {
        display: true,
        font: {
            weight: 600,

        },

        // labels: {
        // position:'bottom'
        // }
    },
    //title: { display: true, },
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,

            }
        }],
        xAxes: [{
            ticks: {
                beginAtZero: true,

            }
        }],

    }
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            percentageOfRisks: "",
            noOfRisks: "",
            riskAnalysisProgress: "",
            responseProgress: "",
            risks: {},
            plans: {},
            vulnerabilities: {},
            entities: {},
            riskHeatMap: {}
        }
    }
    componentWillMount() {
        this.setState({ risks: risks, plans: plans, vulnerabilities: vulnerabilities, entities: entities, riskHeatMap: riskHeatMap })
    }
    componentDidMount() {
        let outcome = { ...this.state.risks }
        let newplans = { ...this.state.plans }
        let vulnerabilities = { ...this.state.vulnerabilities }
        let entities = { ...this.state.entities }
        if (risks) {
            outcome.labels = risks.labels;
            outcome.datasets[0].data = risks.datasets[0] ? risks.datasets[0].data : "";
        }
        if (plans) {
            newplans.labels = plans.labels
            newplans.datasets[0].data = plans.datasets[0] ? plans.datasets[0].data : "";
        }
        if (plans) {
            vulnerabilities.labels = vulnerabilities.labels
            vulnerabilities.datasets[0].data = vulnerabilities.datasets[0] ? vulnerabilities.datasets[0].data : "";
        }
        if (plans) {
            entities.labels = entities.labels
            entities.datasets[0].data = entities.datasets[0] ? entities.datasets[0].data : "";
        }

        this.setState({
            percentageOfRisks: 37.5,
            noOfRisks: 391,
            riskAnalysisProgress: 87.5,
            responseProgress: 56.2,
            risks: outcome,
            plans: newplans,
            vulnerabilities: vulnerabilities,
            entities: entities
        })
    }

    render() {
        let { percentageOfRisks, noOfRisks, riskAnalysisProgress, responseProgress, risks, plans, vulnerabilities, entities, riskHeatMap } = this.state
        return (
            <div>


                <Card style={{ backgroundColor: "#F8F2F5" }}>
                
                    <Card style={{ border: "1", margin: "10px 10px 0px 10px" }}>
                        <div style={{ fontSize: "10x" }}>
                            <span style={{ fontWeight: "bold", float: "left", padding: "10px" }}>  IRM | Pro </span>
                            <span style={{ float: "right", padding: "10px", paddingLeft: "30px", }}> Join Stone <span style={{ cursor: "pointer" }}><sub><b>v</b></sub></span>  </span>
                            <span style={{ float: "right", padding: "10px" }}>  Rescare Enterprises <span style={{ cursor: "pointer" }}><sub><b>v</b></sub></span>  </span>
                            <span style={{ float: "right", padding: "10px" }}>  IRM | Analysis <span style={{ cursor: "pointer" }}><sub><b>v</b></sub></span>  </span>
                            <span style={{ float: "right", padding: "10px" }}>  Logos  </span>


                        </div>
                        <div>

                        </div>
                    </Card>
                    <Card style={{ border: "1", margin: "0px 10px 10px 10px" }}>
                        <div style={{ border: "1", margin: "0px 10px 10px 10px", height: "2.5rem" }}>
                            <div style={{ float: "left", display: "inline-block", padding: "10px" }}>
                                Logo | <b>Governance At a Glance</b>
                            </div>
                            <div style={{ float: "right", display: "inline-block", fontSize: "13px", padding: "10px" }}>
                                <span style={{ textDecoration: "underline", cursor: "pointer", color: "blue" }}>Dashboard</span> > Governance At a Glance
                        </div>
                        </div>
                    </Card>
                    <Card style={{ border: "1", margin: "0px 10px 0px 10px", }}>
                        <CardBody style={{ padding: "0.5rem" }}>
                            <center>Powered by <b>ClearWater IRM | Analysis CyberIntelligence<sup>TM</sup></b>  </center>
                        </CardBody>
                    </Card>
                    <CardBody style={{ paddingTop: "0px" }}>

                        <Row >

                            <Col lg="3" md="4" style={{ padding: "5px" }}  >
                                <Card style={{ border: "0", height: "11rem",fontWeight: "bold" }}>
                                    <CardBody style={{ backgroundColor: "lightblue",padding:"0px" }} >
                                        <div >
                                            <div style={{  padding:"15px",fontSize: "17px",  }}>% Risks >= Threshold</div>
                                            <div style={{ padding: "20px", fontSize: "35px" }}> {percentageOfRisks}%</div>

                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="3" md="4" style={{ padding: "5px" }}>
                                <Card style={{ border: "0", height: "11rem",fontWeight: "bold",  }}>
                                    <CardBody style={{ backgroundColor: "lightgreen",padding:"0px"}}>
                                        <div >
                                            <div style={{ padding:"15px", fontSize: "17px", }}># Risks >= Threshold</div>
                                            <div style={{ padding: "20px", fontSize: "35px" }}> {noOfRisks}</div>
                                            <div style={{ fontSize: "15px",  }}>Average Risk Threshold <b>12.3</b></div>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="3" md="4" style={{ padding: "5px" }}>
                                <Card style={{ border: "0", height: "11rem",fontWeight: "bold"  }}>
                                    <CardBody style={{ backgroundColor: "purple",padding:"0px" }}>
                                        <div>
                                            <div style={{ padding:"15px",fontSize: "17px",  }}>Risk Analysis Progress</div>
                                            <div style={{ padding: "20px",  fontSize: "35px" }}>{riskAnalysisProgress}% </div>

                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="3" md="4" style={{ padding: "5px" }} >
                                <Card style={{ border: "0", height: "11rem",fontWeight: "bold",padding:"0px",padding:"0px"   }}>
                                    <CardBody style={{ backgroundColor: "grey",padding:"0px" }}>
                                        <div >
                                            <div style={{  padding:"15px",fontSize: "17px"  }}> Response Progress for Risks >= Threshold</div>
                                            <div style={{ padding: "20px", fontSize: "35px" }}>{responseProgress}</div>

                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "10px", height: "2rem" }}>
                            <Col lg="3" style={{ padding: "0px 5px 0px 5px" }}>
                                <Card style={{ border: "1" }}>
                                    <CardBody style={{ backgroundColor: "lightgreen", padding: "0" }}>
                                        Risk Rating BreakDown
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" style={{ padding: "0px 5px 0px 5px" }}>
                                <Card style={{ border: "1" }}>
                                    <CardBody style={{ backgroundColor: "grey", padding: "0" }}>
                                        Risk Heat Map
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="3" style={{ padding: "0px 5px 0px 5px" }}>
                                <Card style={{ border: "1" }}>
                                    <CardBody style={{ backgroundColor: "lightblue", padding: "0" }}>
                                        Action Plan BreakDown
                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>
                        <Row style={{ marginTop: "10px" }}>
                            <Col lg="3" style={{ padding: "5px" }}>
                                <Card style={{ border: "1", height: "15rem" }} >
                                    <CardBody  >
                                       
                                        <Doughnut data={risks} options={{ options }} height={200} />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" style={{ padding: "5px" }}>
                                <Card style={{ border: "1", fontSize: "10px",fontWeight:"bold", height: "15rem", }}>

                                    <CardBody>
                                        <HeatMap xLabels={riskHeatMap.xLabels} xLabelsLocation={"bottom"} 
                                            yLabels={riskHeatMap.yLabels}
                                            data={riskHeatMap ? riskHeatMap.data : ''}
                                            
                                            //xLabelWidth={100}
                                            onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
       
                                            cellStyle={(background, value, min, max, data, x, y) => ({
                                                background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
                                                fontSize: "11.5px",
                                               
                                                color: "#000"
                                            })
                                            
                                        }
                                            cellRender={value => value && `${value}`}
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="3" style={{ padding: "5px" }}>
                                <Card style={{ border: "1", height: "15rem" }}>
                                    <CardBody >

                                        <Doughnut data={plans} options={{ options }} height={200} />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "10px", height: "2rem" }}>
                            <Col lg="6" style={{ padding: "5px" }}>
                                <Card style={{ border: "1" }}>
                                    <CardBody style={{ backgroundColor: "lightblue", padding: "0" }}>
                                        # Risks >= Threshold : Top 5 Vulnerabilities
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" style={{ padding: "5px" }}>
                                <Card style={{ border: "1" }}>
                                    <CardBody style={{ backgroundColor: "lightgreen", padding: "0" }}>
                                        # Risks >= Threshold : Top 5 Entities
                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>
                        <Row style={{ marginTop: "10px" }}>
                            <Col lg="6" style={{ padding: "5px" }}>
                                <Card style={{ border: "1" }}>
                                    <CardBody>
                                        <HorizontalBar data={vulnerabilities} height={250} options={{
                                            ...options, scales: {
                                                yAxes: [{
                                                    ticks: {
                                                        beginAtZero: true,
                                                        display: true,
                                                    }
                                                }],
                                                xAxes: [{
                                                    ticks: {
                                                        display: true,
                                                        beginAtZero: true,

                                                    }
                                                }]
                                            }
                                        }} />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" style={{ padding: "5px" }}>
                                <Card style={{ border: "1" }}>
                                    <CardBody>
                                        <HorizontalBar data={entities} height={250} options={{
                                            ...options, scales: {
                                                yAxes: [{
                                                    ticks: {
                                                        beginAtZero: true,
                                                        display: true,
                                                    }
                                                }],
                                                xAxes: [{
                                                    ticks: {
                                                        display: true,
                                                        beginAtZero: true,

                                                    }
                                                }]
                                            }
                                        }} />
                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>


                    </CardBody>

                </Card >
            </div >

        )
    }

}

export default Dashboard