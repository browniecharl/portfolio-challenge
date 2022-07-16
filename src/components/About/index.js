import React from "react";


function About() {
    return (
        <section>
            <h1 className="has-text-centered is-size-2">About Me</h1>
            <div className="has-text-centered">
            <img className="profilePic" src={require('../../assets/385.jpeg')} alt="profilePhoto"
                    width='45%'
                    height='45%' />
            </div>
            <div className="columns is-mobile">
                <div className="column is-2"></div>
                <div className="column has-text-black">
                    <p className="aboutText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div className="column is-2"></div>
            </div>
        </section>
    );
}

export default About;