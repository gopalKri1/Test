import * as React from 'react';
interface ITickmarkData {
    tickmarkId: string;
    accountId: string;
    businessUnitId: string;
    businessUnitFSLevelId: string;
    mode: 'New' | 'Edit';
}

export interface ITickmarkDropdownProps {

    // angularInjector: ng.auto.IInjectorService;
    // accounts: datastore.models.IAccount[];
    // businessUnitFSLI: datastore.models.IBusinessUnitFinancialStatementLevel;
    // businessUnit: datastore.models.IBusinessUnit;
    // tickMarkSelectedChanged(t: ITickMarkUpdatedData): void;
    // businessUnitFSLevelId: string;
    // row: any;
    OptionValues: any;
    // tickmarkData: datastore.models.ITickmark[];
}

interface ItickmarkDropdownState {
    value: any;
    check: any;
}

const Option = (props) => {
    return (
        <div>
            <li
                onClick={
                   
                   
                    props.handleChange(props.id)
            }
            >
                {props.id}
            </li>
        </div>
    )
}

export class TickmarkDropdownCell extends React.Component<ITickmarkDropdownProps, ItickmarkDropdownState> {
    constructor(props: ITickmarkDropdownProps) {
        super(props);
        this.state = {
            check: false,
            value: '--'
        }
    }


   // handleClose = () => this.setState({ check: !this.state.check });
   // handleChange = (value) => this.setState({ value: value });

    //TODO Tickmark Selected Changed from the account - Update account store rerender table
    //onSelect = (e) => {

    //    this.setState(e.target.value);
  //      //this.LeadScheduleActions.saveTickmarks(this.$scope, e.target.value)
    //} 

    public handleChange =(value :  string) => (e: React.MouseEvent<HTMLInputElement>) => {
      //  alert('handle change'+value)
        e.preventDefault();
        this.setState({ value: value});
    }

    public handleClose = (e: React.MouseEvent<HTMLInputElement>) => {
        //('close')
        this.setState({ check: !this.state.check });
    }


    handleTickmark = (accountId) => {

    }

    render(): JSX.Element {

       // const businessUnitFSLevelId = this.props.businessUnitFSLevelId;
        //const businessUnit = this.props.businessUnit;
       // const businessUnitId = businessUnit.businessUnitId;
       // const accountId = this.props.row.key;
       // let tickmarkD = this.props.tickmarkData.filter(t => t.accountId === accountId && t.businessUnitFSLevelId === businessUnitFSLevelId);

       // let rows = [];
       // this.props.accounts.forEach(eachAccount => {

            // Get TickMark
         //   let tickMark = eachAccount.tickMark(businessUnitId, businessUnitFSLevelId);

            // Get TickMark Description
          //  let tickMarkDescription = eachAccount.tickMarkDescription(businessUnitId, businessUnitFSLevelId);

           // var tempDiv = document.createElement("div");
           // tempDiv.innerHTML = tickMarkDescription;
           // let tickMarkDescText = tempDiv.textContent || tempDiv.innerText || "";


            //let eachITBViewRowData = {
           //     key: eachAccount.accountId,
           //     tbTickMarkData: { tickMark: tickMark, tickMarkDescription: tickMarkDescription, tickMarkDescriptionText: tickMarkDescText }
           // };
           // rows.push(eachITBViewRowData);
        //});

        //let tickMarkOptions = [];
        //rows.forEach((r) => { tickMarkOptions.push(r.tbTickMarkData.tickMark); });

        const { check, value } = this.state;
        const { OptionValues } = this.props;
        const options = [];
        OptionValues.forEach(option => options.push(
            <Option
                key={option}
                id={option}
                value={this.state.value}
                handleChange={this.handleChange}
                handleClose={this.handleClose}
            />
        ));
       


        ///TODO Add custom options 
         // <select onChange={() => this.props.tickMarkSelectedChanged({ id: this.props.row.key, tickMark: this.onSelect.bind(this) })} value={this.props.row.tbTickMarkData.tickMark != null ? this.props.row.tbTickMarkData.tickMark : "--"} style={{ minWidth: "5em", height: "100%" }}>
                 //   {tickMarkOptions.map((x, y) => <option value={x} key={y}>{x}</option>)}
               // </select>
        //return (               
        //    <div>
              
        //        <div className="sel-box">
        //            <span className="select-dropdown">Select</span>
        //            <ul className="toc-odd">
        //                <li><a href="1">It's finally here</a></li>
        //                <li><a href="2">Improvements</a></li>
        //                <li><a href="3">Handling</a></li>
        //            </ul>
        //        </div>
        //    </div>     
        //);    

        return (
            <div className="select">
                <span id="select" onClick={this.handleClose} >{this.state.value}</span>
                <ul className="popup-menu-list" id="sel-option">
                    { this.state.check ? options : null}
                </ul>
            </div>
        )
    }
}