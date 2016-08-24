import React from 'react';

export default class TodoBox extends React.Component{
  render() {
    return(
    	<div className="todoBox">
      	<h1>Todos</h1>
      	<TodoList data = {this.props.data} />
      	<TodoForm />
     	</div>
    );
  }
}

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			titleValue: "",
			detailValue: ""
		};
		this.changeTitle = this.changeTitle.bind(this);
		this.changeDetail = this.changeDetail.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}

	changeTitle(e) {
		this.setState({titleValue: e.target.value});
	}

	changeDetail(e) {
		this.setState({detailValue: e.target.value});
	}

	addTodo() {
		let new_data = {
			title: this.state.titleValue,
			detail: this.state.detailValue
		};
		this.state.data.push(new_data);
		this.setState({data: this.state.data});
		this.setState({titleValue: ""});
		this.setState({detailValue: ""});
	}

	deleteTodo(title) {
		this.setState({
			data: this.state.data.filter(function(data){
				return data.title != title;
			})
		});
	}

	render() {
		var onDelete = this.deleteTodo;
		var todo = this.state.data.map(function(obj) {
			return <Todo onDelete={onDelete} title={obj.title} key={obj.title}>{obj.detail}</Todo>
		});
		return(
			<div className="todoList">
				<div>
					Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
					Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
					<button onClick={this.addTodo}>Add</button>
				</div>
				<table style={{border: "2px solid black"}}>
					<tbody>
						{todo}
					</tbody>
				</table>
			</div>
		);
	}
}

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {checked: false,
		              textDecoration: style.notCheckedTodo};
		this.handleChange = this.handleChange.bind(this);
		this._onDelete = this._onDelete.bind(this);
	}
	handleChange(e) {
		this.setState({checked: e.target.checked});
		if(e.target.checked) {
			this.setState({textDecoration: style.checkedTodo});
		} else {
			this.setState({textDecoration: style.notCheckedTodo});
		}
	}
	_onDelete() {
		console.log(this.props);
		this.props.onDelete(this.props.title);
	}
	render() {
		return(
			<tr style={this.state.textDecoration}>
				<td style={style.tableContent}>
					<button onClick={this._onDelete}>X</button>
				</td>
				<td style={style.tableContent}>
					<input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
				</td>
				<td style={style.tableContent}>{this.props.title}</td>
				<td style={style.tableContent}>{this.props.children}</td>
			</tr>
		);
	}
}

Todo.propTypes = {
	title: React.PropTypes.string.isRequired		
}

class TodoForm extends React.Component {
	render() {
		return(
			<div className="todoForm">
				I am a TodoForm.
			</div>
		);
	}
}

let style = {
  checkedTodo: {
  	textDecoration: "line-through"
  },
  notCheckedTodo: {
  	textDecoration: "none"
  },
	tableContent: {
		border: "1px solid black"
	}
}