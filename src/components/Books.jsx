import React, { Component } from 'react';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            booksBorrowed : 0,   
            books:[
                {
                    id:1,
                    title: "book1",
                    author: "author1",
                    category:"cat 1",
                    status: "available",
                    borrowedDate: "",
                    returnedDate: "",
                    dueDate: "",
                    fine: 0
                },
                {
                    id:2,
                    title: "book2",
                    author: "author2",
                    category:"cat 2",
                    status: "available",
                    borrowedDate: "",
                    returnedDate: "",
                    dueDate: "",
                    fine: 0
                },
                {
                    id:3,
                    title: "book3",
                    author: "author3",
                    category:"cat 3",
                    status: "available",
                    borrowedDate: "",
                    returnedDate: "",
                    dueDate: "",
                    fine: 0
                },
                {
                    id:4,
                    title: "book4",
                    author: "author4",
                    category:"cat 4",
                    status: "available",
                    borrowedDate: "",
                    returnedDate: "",
                    dueDate: "",
                    fine: 0
                }
            ]

        }
    }

    handleClick = (book) =>{
        console.log(book.id) //1
        this.setState({
            booksBorrowed: this.state.booksBorrowed + 1
        })
        console.log("this.state.books[book.id]", this.state.books[book.id])
        // if(book.id === this.state.books.includes(book.id)) {
        //     console.log("book.id", book)
        //     this.setState({
        //         books:  [ ...this.state.books,{
        //             'status': "Borrowed"               
        //         }]
        //     })
        // }  



        this.state.books.find(function (element) {
            if(element.id === book.id){
                console.log("book.id inside if", book)
                console.log("status", element.status)
                return element.status === "Borrowed"
            }
            else{
                return null
            }
            // return element.status === "Borrowed";
            
          });



    }

    render() {
        console.log("booksBorrowed", this.state.booksBorrowed)
        return (
                <div>
                <table>
                   <thead>
                       <tr>
                       <td>Title</td>
                       <td>Author</td>
                       <td>Category</td>
                       <td>Status</td>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.books.map((book, index)=>{
                             return  <tr key={index}>
                                 <td>{book.title}</td>
                               <td>{book.author}</td>
                               <td>{book.category}</td>
                               <td>{book.status}</td>
                               <td onClick={()=>{
                                   this.handleClick(book)
                               }} className={
                            this.state.booksBorrowed <3 ? "btn-table" : "btn-table disabled"
                           }>+Add</td> 
                             </tr>

                           })
                       }
                   </tbody>
                </table>
                </div>
        );
    }
}

export default Books;