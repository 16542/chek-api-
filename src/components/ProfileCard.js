
import { Card,Button } from "react-bootstrap";

const ProfileCard = ({email,phone}) => {
  return (
    <Card style={{ width: '18rem' }} className="card">
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BSWgzao9rX4fLIv7e4vSemPPEsDtzlA6lQ&usqp=CAU" />
  <Card.Body>
    <Card.Title>{email}</Card.Title>
    <Card.Text>
    {phone}
    </Card.Text>
    
  </Card.Body>
</Card>
  )
}

export default ProfileCard
