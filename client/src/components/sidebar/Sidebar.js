import React,{Component} from 'react';
import { connect } from 'react-redux';
import {fetchPrograms,fetchByYear, fetchBySuccessfulLaunch, fetchBySuccessfulLanding} from '../../../actions/ActionsCreator';

class Sidebar extends Component{
    
    constructor(props){
        super(props);
        this.state={
            yearSelected : '',
            isLaunched : '',
            isLanded : ''
        }
        this.filterByYear = this.filterByYear.bind(this);
        this.filterBySuccessfulLaunch = this.filterBySuccessfulLaunch.bind(this);
        this.resetFilter = this.resetFilter.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(){
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
        const searchParams = new URLSearchParams();
        searchParams.set('limit', 100);
        if(this.state.isLaunched !== ''){
            url += `&launch_success=${this.state.isLaunched}`;
            searchParams.set("launch_success", this.state.isLaunched);
        }
        if(this.state.isLanded !== ''){
            url += `&land_success=${this.state.isLanded}`;
            searchParams.set("land_success", this.state.isLanded);
        }
        if(this.state.yearSelected !== ''){
            url += `&launch_year=${this.state.yearSelected}`;
            searchParams.set("launch_year", this.state.yearSelected);
        }
        this.props.fetch_programs(url);
        let newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + `?${searchParams.toString()}`;    
        window.history.pushState({ path: newURL }, '', newURL);
    }

    resetFilter(){
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
        this.props.fetch_programs(url);
        this.setState({
            yearSelected : '',
            isLaunched : '',
            isLanded : ''
        })
        let newURL = window.location.protocol + "//" + window.location.host + window.location.pathname;    
        window.history.pushState({ path: newURL }, '', newURL);
    }

    filterByYear(year){
        this.setState({
            yearSelected : year
        }, this.handleFilter)
    }

    filterBySuccessfulLaunch(val){
        this.setState({
            isLaunched : val.toLowerCase()
        }, this.handleFilter)
    }

    filterBySuccessfulLanding(val){
        this.setState({
            isLanded : val.toLowerCase()
        }, this.handleFilter)
    }
    
    render(){
        const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
        const successful_launch = ['True','False'];
        const successful_landing = ['True','False']
        return(
            <div className="text-center" style={{backgroundColor : '#FFFFFF', padding: '5px'}}>
                <h5>Launch Year</h5><hr />
                <div className="row">
                    {
                        years.map((year,index) => (
                            <div className="col-sm-6 mb-3" key={index}><button className="btn btn-success" onClick={() => this.filterByYear(year)}>{year}</button></div>
                        ))
                    }
                </div>
                <h5>Successful Launch</h5><hr />
                <div className="row">
                    {
                        successful_launch.map((val,index) => (
                            <div className="col-sm-6 mb-3" key={index}><button className="btn btn-success" onClick={() => this.filterBySuccessfulLaunch(val)}>{val}</button></div>
                        ))
                    }
                </div>
                <h5>Successful Landing</h5><hr />
                <div className="row">
                    {
                        successful_landing.map((val,index) => (
                            <div className="col-sm-6 mb-3" key={index}><button className="btn btn-success" onClick={() => this.filterBySuccessfulLanding(val)}>{val}</button></div>
                        ))
                    }
                </div>
                <h5>Reset Filters</h5><hr />
                <button onClick={this.resetFilter} className="btn btn-success">Reset</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch_programs : (url) => dispatch(fetchPrograms(url)),
        // fetch_by_year : (year) => dispatch(fetchByYear(year)),
        // fetch_by_successful_launch : (val) => dispatch(fetchBySuccessfulLaunch(val)),
        // fetch_by_successful_landing : (val) => dispatch(fetchBySuccessfulLanding(val))
    }
}
export default connect(null, mapDispatchToProps)(Sidebar);