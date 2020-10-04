class FontChooser extends React.Component {
    constructor(props) {
super(props);
this.state={bold:this.props.bold=='true', colorred:false, count: Number(this.props.size), nascosto:true};
    }

handleClick=()=> {
this.setState({bold: !this.state.bold});
}
Mostra =()=> {
this.setState({nascosto:!this.state.nascosto});
}
Nascondi =()=> {
this.setState({nascosto:!this.state.nascosto});
this.setState({count: Number(this.props.size)});
}
Clickpiu =()=> {
if (Number(this.state.count)<10) {
this.setState({ count: 1 + Number(this.state.count)});
}
if (Number(this.state.count) >= 9) {
this.setState({colorred :true});
}
if (Number(this.state.count)>4 && Number(this.state.count)<9) {
this.setState({colorred :false});
}
}
Clickmeno =()=>  {
if (Number(this.state.count)> 3) {
this.setState({ count: Number(this.state.count) - 1 });
this.setState({colorred :false});
}
if (Number(this.state.count) <= 4) {
this.setState({colorred :true});
}
}

render() {
var weight=this.state.bold?'bold':'normal';
var hid=this.state.nascosto?'true':'false';
var bool=(hid=='true');
var Mycolor = this.state.colorred?'red':'black';  
var check= this.state.bold?'true':'false';  
var boolcheck= (check=='true');

return (
      <div>
      <input type="checkbox" id="boldCheckbox" checked={boolcheck} hidden = {bool} onChange={this.handleClick} />
      <button id="decreaseButton" hidden = {bool} onClick={this.Clickmeno}>-</button>
      <span id="fontSizeSpan" style={{ color: Mycolor}} hidden = {bool} onDoubleClick={this.Nascondi.bind(this)}>{this.state.count}</span>
      <button id="increaseButton" hidden = {bool} onClick={this.Clickpiu.bind(this)} >+</button>
      <span id="textSpan" style= {{fontWeight:weight, fontSize:this.state.count}} onClick={this.Mostra} onDoubleClick={this.Nascondi.bind(this)} >{this.props.text}</span>
      </div>
);
    }
}
