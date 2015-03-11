var List = React.createClass({
	getInitialState:function(){
		return(
			item : ""
		);
	},
	render:function(){

		var itemNodes = this.props.data.map(function(item,index){
			return (
				<Item 
					key={index}
					itemtext={item.itemtext} />
			)
		})
		return (
			
			<div>
				{itemNodes}
				<NewItem />
			</div>
			
		);
	}
});

var Item = React.createClass({
	render:function(){
		return (
			<li>{this.props.itemtext}</li>
		);
	}
});

var NewItem = React.createClass({
	render:function(){
		return(
			<div>
				<input type="text" />
				<button>ADD</button>
			</div>
		);
	}
});
window.itemData = [
		{itemtext: "Stuffed Chard"},
		{itemtext: "Eggplant and Polenta"}
	];


React.render(<List data={window.itemData}/>,document.body);