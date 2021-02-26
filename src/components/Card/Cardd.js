import React, { Component } from 'react';
import Card from '@material-ui/core/Card';  
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { blue, green, yellow } from '@material-ui/core/colors';

class Cardd extends Component {
  constructor(props) {
    super(props);
    this.generationCard= this.generationCard.bind(this);
  }

  setColor(status){
      if (status==='inProgress') {
          return yellow
      } else if (status==='ready') {
          return blue;
      } else {
          return green;
      }
  }

  generationCard(name,status, dueDate){
      return(
    <Card>
    <CardContent >
        <div style={{textAlign: 'center'}} >
            <Typography variant="h6" component="h1" >
                {name}
            </Typography><br/>
            <Typography variant="h6" component="h1">
                {status} - {dueDate.toString()}
            </Typography><br/>
        </div>
    </CardContent>
    </Card>);
  }

  render() {
    return (
        <div>
        {this.props.Cards.map((Card,i)=>{
            return(
                <div key={i}>
                    {this.generationCard(Card.name,Card.status,Card.dueDate)}
                    <br/>
                    <br/>
                </div>
            )
        })}
        </div>
    
    );

  }
}

export default Cardd;
