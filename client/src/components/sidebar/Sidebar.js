import React,{Component} from 'react';
import { connect } from 'react-redux';
import {fetchByYear, fetchBySuccessfulLaunch, fetchBySuccessfulLanding} from '../../../actions/ActionsCreator';

class Sidebar extends Component{
    
    constructor(props){
        super(props);
        this.filterByYear = this.filterByYear.bind(this);
        this.filterBySuccessfulLaunch = this.filterBySuccessfulLaunch.bind(this);

    }

    filterByYear(year){
        this.props.fetch_by_year(year);
    }

    filterBySuccessfulLaunch(val){
        // alert(val.toLowerCase())
        this.props.fetch_by_successful_launch(val);
    }

    filterBySuccessfulLanding(val){
        this.props.fetch_by_successful_landing(val);
    }
    render(){
        const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
        const successful_launch = ['True','False'];
        const successful_landing = ['True','False']
        return(
            <div className="text-center">
                <h5>Launch Year</h5>
                <div className="row">
                    {
                        years.map((year,index) => (
                            <div className="col-sm-6 mb-3" key={index}><button className="btn btn-success" onClick={() => this.filterByYear(year)}>{year}</button></div>
                        ))
                    }
                </div>
                <h5>Successful Launch</h5>
                <div className="row">
                    {
                        successful_launch.map((val,index) => (
                            <div className="col-sm-6 mb-3" key={index}><button className="btn btn-success" onClick={() => this.filterBySuccessfulLaunch(val)}>{val}</button></div>
                        ))
                    }
                </div>
                <h5>Successful Landing</h5>
                <div className="row">
                    {
                        successful_landing.map((val,index) => (
                            <div className="col-sm-6 mb-3" key={index}><button className="btn btn-success" onClick={() => this.filterBySuccessfulLanding(val)}>{val}</button></div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch_by_year : (year) => dispatch(fetchByYear(year)),
        fetch_by_successful_launch : (val) => dispatch(fetchBySuccessfulLaunch(val)),
        fetch_by_successful_landing : (val) => dispatch(fetchBySuccessfulLanding(val))
    }
}
export default connect(null, mapDispatchToProps)(Sidebar);