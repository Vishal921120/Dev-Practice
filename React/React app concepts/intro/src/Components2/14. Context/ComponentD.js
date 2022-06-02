import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentD extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    username => {
                        return (
                            <div>hello {username}</div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentD