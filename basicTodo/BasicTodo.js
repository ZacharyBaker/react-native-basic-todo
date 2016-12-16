import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

import List from './List'
import Input from './Input'
import Title from './Title'

export default class BasicTodo extends Component {

	state = {
		todos: ['Eat a sandwich', 'Skate', 'Learn something']
	}

	onAddTodo = (text) => {
		const {todos} = this.state

		this.setState({
			todos: [text, ...todos],
		})
	}

	onRemoveTodo = (index) => {
		const {todos} = this.state

		this.setState({
			todos: todos.filter((todo, i) => i !== index),
		})
	}

	render() {
		const {todos} = this.state

		return (
			<View>
				<Title>
					To-Do List
				</Title>
				<Input 
					placeholder={'Type a todo, then hit enter!'}
					onSubmitEditing={this.onAddTodo}
				/>
				<List
          			list={todos}
          			onPressItem={this.onRemoveTodo}
        		/>
			</View>
		)
	}

}