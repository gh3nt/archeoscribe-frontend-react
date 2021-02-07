class Site extends React.Component {   
        constructor(props) {
          super(props);
          this.archeoproperties = [
            {"name": "Name", "value": "some site"},
            {"name": "Location", "value": "neverland"}
          ];
        }
        
        render() {
           return (
            <div>
              <p>Site</p>
              <ul>
                {this.archeoproperties.map((archeoproperty, index) => {
                  return <li key={index}>{archeoproperty.name} : {archeoproperty.value}</li>
                })}
            </ul>
           </div>
    );
  }
}

ReactDOM.render(
<div>
  <h1>Hello ArcheoScribe React!</h1>
  <Site /> 
 </div>,
 document.getElementById('root')
);

    
    
    
    
    