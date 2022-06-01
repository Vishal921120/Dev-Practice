import React from 'react'
import Person from './Person'

function PersonList() {
    const persons = [
        {
            id: 1,
            name: "Vishal",
            age: 22,
            Skill: "React"
        },
        {
            id: 2,
            name: "ViKas",
            age: 29,
            Skill: "Angular"
        },
        {
            id: 3,
            name: "Ram",
            age: 500,
            Skill: "Everthing"
        }
    ]
    // Note = inside map fn always use rounded brackets to return html instead of curly brackets
    // Now this doesn't look good so we can do the work of refactoring of person name age skill in differnt component
    // and use that component here. Also pass the person to the component.
    // const person = persons.map(person => (
    //     <h2>I am {person.name}. My age is {person.age}. And my skill is {person.Skill}</h2>
    // ))

    // now this looks clean and structured. but key prop is missing which is giving red warning in console.
    // const person = persons.map(person => <Person person={person} />)

    // key prop is speacil attribute which we have to assign while rendering a list , key must
    // have a unique value. so we can use id , name as long as we know that it will be unique in our list
    const person = persons.map(person => <Person key={person.id} person={person} />)
    // key prop is reserved for react for better rendering of list . Our child Person cannot access this key prop.
    // For understanding why we need key . Watch codeevolution video 18 list and key from 5.30 sec.
    // Basically when we add something new in the end of bottom of list so react compares all lists items 
    // and then update and add in the end wihout rerendring all list . But when we add something in th beginning
    // so react starts matching elements of list and see that the first element is different and in this way all elements
    // looks different for react so it rerender the complete list again. So to avoid this problem we need key.


    return (
        <div>{person}</div>
    )
}

export default PersonList