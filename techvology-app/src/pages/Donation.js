import React from 'react'

const Donation = () => {

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={styles}>
      <span>
        <h1>Clean Air Task Force<br /></h1> 
        <h2>Charity of the Month<br /></h2>
        <img id="img" src="https://acb0a5d73b67fccd4bbe-c2d8138f0ea10a18dd4c43ec3aa4240a.ssl.cf5.rackcdn.com/10102/Logo.png?v=1644418127000"></img>
        <h3>This month, our charity spotlight is on<br />
        Clean Air Task Force with their mission of<br />
        "driving change forward through policy and innovation."<br /></h3>
        <h4>Their Mission:<br /></h4>
        <h5>Push the technology and policy changes needed to achieve a zero-emissions,<br />
        high-energy planet at an affordable cost.</h5>
        <h4>Their Vision:<br /></h4>
        <h5>Meet the world’s rising energy demand in a way that is financially, <br />
        socially, and environmentally sustainable.</h5>
        <h4>Their Goal:<br /></h4>
        <h5>Achieve zero-emissions energy, waste, agricultural, and forest management <br />
        systems by 2050.</h5>
        <a href="https://www.catf.us/donate/" target="_blank" rel="noreferrer">
          <button>Donate Now!</button>
        </a>
      </span> 
    
    </div>
  )
}

export default Donation