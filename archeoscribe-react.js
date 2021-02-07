class Sites extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      archeoSites: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/archeoscribe/restapi/v0/sites/")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          archeoSites: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      )
  }

  render() {
    const { error, isLoaded, archeoSites } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <p>Sites</p>
        <ul>
        {archeoSites.map((archeoSite, index) => {
          return <li key={index}> <Site archeoSite={archeoSite} /></li>
        })}
        </ul>
        </div>
        );
    }
  }


}

class Site extends React.Component {   
  constructor(props) {
    super(props);
  }

  render() {
   return (
    <div>
    <p>Site {this.props.archeoSite.id}</p>
    <ul>
    {this.props.archeoSite.properties.map((archeoProperty, index) => {
      return <li key={index}>{archeoProperty.propertyName} : {archeoProperty.propertyValue}</li>
    })}
    </ul>
    </div>
    );
  }
}

ReactDOM.render(
  <div>
  <h1>Hello ArcheoScribe React!</h1>
  <Sites /> 
  </div>,
  document.getElementById('root')
  );





    