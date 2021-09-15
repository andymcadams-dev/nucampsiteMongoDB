import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          accounts: [
            {
                id: 0,
                name: "User One",
                image: "/assets/images/MichaelWhitt.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                phone: 1-233-645-9087,
                featured: true,
                email: "fakeemail@fakesite.com"
            },
            {
                id: 1,
                name: "User Two",
                image: "/assets/images/JacobMooney.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                phone: 1-233-645-9087,
                featured: true,
                email: "fakeemail@fakesite.com"
            },
            {
                id: 2,
                name: "User Three",
                image: "/assets/images/AndyMcAdams.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                phone: 1-233-645-9087,
                featured: true,
                email: "fakeemail@fakesite.com"
            },
            
        ]
        };
    }

      render() {
        const directory = this.state.accounts.map(account => {
            return (
                <div key={account.id} className="col">
                    <img src={account.image} alt={account.name} />
                    <h2>{account.name}</h2>
                    <p>{account.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
  } 
  

export default Directory;