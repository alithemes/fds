import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import PageData from '../../data/pageData.json'

function NewCard() {
  return (
    <>
    <div style={{ clear: "both", marginBottom: "3rem" }}></div>
        <div
          className="d-grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, 18rem)" }}
        >
          {PageData.map((props) => {
            return (

    <Card style={{ width: '18rem', marginLeft:'2rem' }} key={props.id}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body  className="d-flex flex-column justify-content-around">
        <Card.Title>{props.title}</Card.Title>
        <div className="d-flex align-items-start"></div>
        <Card.Text className="content-text" >
         {props.body.substring(0, 60)}.......
        </Card.Text>
       
      </Card.Body>
      <Card.Footer> 
        <Link href={`/page-details/${props.id}`}>
                <a className="btn btn-black text-body-lead  ">Learn More</a>
        
        </Link>
      </Card.Footer>
          
    </Card>
          )})}
    </div>
          
    </>
  );
}

export default NewCard;