import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPrograms} from '../../../actions/ActionsCreator';
import Sidebar from '../sidebar/Sidebar';
import Loader from '../loader/Loader';

class ProgramList extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPrograms();
    }

    renderPrograms(){
        return this.props.programs.map(program => (
             <div className="col-sm-6 col-md-6 col-lg-3 mb-5" key={program.flight_number}>
                <div className="card">
                    <img src={program.links.mission_patch_small} alt={program.mission_name}></img>
                    <div className="card-body">
                        <h4 className="card-title text-primary">{program.mission_name} #{program.flight_number}</h4> 
                        <strong>Mission Ids: </strong>
                        <ul className="card-text"><li>{program.mission_id[0]}</li></ul>
                        <p className="card-text"><strong>Launch Year:</strong>{program.launch_year}</p>
                        <p className="card-text"><strong>Successful Launch:</strong>{JSON.stringify(program.launch_success)}</p>
                    </div>
                </div>
            </div>
        ))
    }

    render(){
        return(
            <div className="container-fluid" style={{backgroundColor : '#f1f1f1'}}>
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <h3>Filters</h3>
                    <Sidebar />
                </div>
                <div className="col-sm-12 col-md-9 mt-5">
                    <div className="row">
                        {
                            this.props.isLoading ? (
                                <Loader />
                            ) : this.props.programs.length > 0 ? this.renderPrograms() : (<h1 className="text-center text-danger">OOPS... No Record Found</h1>)
                        }
                    </div>
                    
                </div>
            </div>
            </div>
        )
    }
}

export const loadData = (store) => {
    return store.dispatch(fetchPrograms());
}


const mapStateToProps = (state) => {
    return {
        programs : state.programs.programs,
        isLoading : state.programs.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPrograms : () => dispatch(fetchPrograms())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProgramList);