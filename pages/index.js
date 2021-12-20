import React, { Component } from "react";
import Home from "./home";
// import Countdown from "./countdown/countdown"
import Head from "next/head";

export class Index extends Component {

  


  render() {
    return (
      <>
        <Head>
          <title>Celect</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

        </Head>
        
        <Home />
        {/* <Countdown/> */}
      </>
    );
  }
}

export default Index;